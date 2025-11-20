'use client';

import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { projects, experiences, education, skills, involvement, personalInfo, helpText } from '@/lib/terminalData';
import { useViewMode } from '@/contexts/ViewModeContext';

type ViewMode = 'terminal' | 'editor' | 'resume' | 'resume-fullscreen';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

export default function Terminal() {
  const { setViewMode: setGlobalViewMode } = useViewMode();
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [viewMode, setViewMode] = useState<ViewMode>('terminal');
  const [editorContent, setEditorContent] = useState('');
  const [editorTitle, setEditorTitle] = useState('');
  
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enable terminal mode (no scroll)
    document.documentElement.classList.add('terminal-mode');
    document.documentElement.classList.remove('portfolio-mode');
    
    // Welcome message
    const welcomeDate = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    setLines([
      { type: 'output', content: '╔════════════════════════════════════════════════════════════════════╗' },
      { type: 'output', content: '║                                                                    ║' },
      { type: 'output', content: '║              Welcome to Qendrim\'s Terminal Portfolio               ║' },
      { type: 'output', content: '║                                                                    ║' },
      { type: 'output', content: '╚════════════════════════════════════════════════════════════════════╝' },
      { type: 'output', content: '' },
      { type: 'output', content: `Session started: ${welcomeDate}` },
      { type: 'output', content: `User: ${personalInfo.name} | ${personalInfo.role}` },
      { type: 'output', content: '' },
      { type: 'output', content: 'Type !help to see available commands, or !portfolio for regular view.' },
      { type: 'output', content: '' },
    ]);
    
    return () => {
      document.documentElement.classList.remove('terminal-mode');
    };
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    if (viewMode === 'terminal' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [viewMode]);

  const addLine = (type: 'input' | 'output' | 'error', content: string) => {
    setLines(prev => [...prev, { type, content }]);
  };

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    // Add to history
    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    // Add input line
    addLine('input', `$ ${trimmedCmd}`);

    // Parse command
    const parts = trimmedCmd.split('/');
    const mainCmd = parts[0].toLowerCase();
    const subCmd = parts[1]?.toLowerCase();

    switch (mainCmd) {
      case '!help':
        addLine('output', helpText);
        break;

      case '!clear':
        setLines([]);
        break;

      case '!portfolio':
        addLine('output', 'Switching to regular portfolio view...');
        setTimeout(() => setGlobalViewMode('portfolio'), 500);
        break;

      case '!resume':
        addLine('output', 'Opening resume... (Press "f" for fullscreen, "q" or Esc to close)');
        setTimeout(() => setViewMode('resume'), 300);
        break;

      case '!about':
        addLine('output', `
${personalInfo.name}
${'='.repeat(personalInfo.name.length)}

Role: ${personalInfo.role}
Location: ${personalInfo.location}
Education: ${education.institution} - ${education.year}
Minor: ${education.minor}
Academic Standing: ${education.standing}
Languages: ${personalInfo.languages.join(', ')}

Hi! I'm Qendrim, a ${education.year} ${education.degree.split(' ')[education.degree.split(' ').length - 1]} student at the University of Alberta.
I'm a competitor and builder who's passionate about creating impactful products. I've built 
Philo (25K+ users, $24K ARR), won hackathons, and am currently working at NAT on multi-agent 
LLM research while leading Index Competitive.
        `);
        break;

      case '!experience':
        if (subCmd) {
          const exp = experiences.find(e => e.id === subCmd);
          if (exp) {
            openEditor(exp.company, `
${exp.role} at ${exp.company}
${'-'.repeat(exp.role.length + exp.company.length + 4)}

Period: ${exp.period}

${exp.description}

Key Achievements:
${exp.achievements.map((a, i) => `  ${i + 1}. ${a}`).join('\n')}
            `);
          } else {
            addLine('error', `Experience '${subCmd}' not found. Use !experience to list all.`);
          }
        } else {
          addLine('output', `
Work Experience:
================

${experiences.map(e => `  ${e.id.padEnd(20)} ${e.role} at ${e.company} (${e.period})`).join('\n')}

Use !experience/[id] to view details (e.g., !experience/index-competitive)
          `);
        }
        break;

      case '!education':
        addLine('output', `
Education:
==========

Institution: ${education.institution}
Degree: ${education.degree}
Minor: ${education.minor}
Period: ${education.period}
Status: ${education.year}
Academic Standing: ${education.standing}
        `);
        break;

      case '!skills':
        addLine('output', `
Languages:
==========

${skills.languages.map((s, i) => `  ${i + 1}. ${s}`).join('\n')}

Development:
============

${skills.development.map((s, i) => `  ${i + 1}. ${s}`).join('\n')}

AI/ML:
======

${skills.aiml.map((s, i) => `  ${i + 1}. ${s}`).join('\n')}

Tools:
======

${skills.tools.map((s, i) => `  ${i + 1}. ${s}`).join('\n')}
        `);
        break;

      case '!projects':
        if (subCmd) {
          const project = projects.find(p => p.id === subCmd);
          if (project) {
            let content = `
${project.title}
${'='.repeat(project.title.length)}

Date: ${project.date}
${project.award ? `Award: ${project.award}` : ''}

${project.description}

Technologies:
${project.tech.map(t => `  • ${t}`).join('\n')}

Links:
${project.github ? `  GitHub: ${project.github}` : ''}
${project.demo ? `  Demo: ${project.demo}` : ''}
            `;
            openEditor(project.title, content);
          } else {
            addLine('error', `Project '${subCmd}' not found. Use !projects to list all.`);
          }
        } else {
          addLine('output', `
Projects:
=========

${projects.map((p, i) => `  ${(i + 1).toString().padStart(2)}. ${p.id.padEnd(20)} ${p.summary}${p.award ? ` ${p.award}` : ''}`).join('\n')}

Use !projects/[id] to view details (e.g., !projects/neuronavscore)
          `);
        }
        break;

      case '!involvement':
        if (subCmd) {
          const inv = involvement.find(i => i.id === subCmd);
          if (inv) {
            openEditor(inv.organization, `
${inv.role} - ${inv.organization}
${'='.repeat(inv.role.length + inv.organization.length + 3)}

Period: ${inv.period}
Location: ${inv.location}

${inv.description}

Key Achievements:
${inv.achievements.map((a, i) => `  ${i + 1}. ${a}`).join('\n')}
            `);
          } else {
            addLine('error', `Involvement '${subCmd}' not found. Use !involvement to list all.`);
          }
        } else {
          addLine('output', `
Leadership & Involvement:
=========================

${involvement.map((inv, i) => `  ${inv.id.padEnd(20)} ${inv.role} at ${inv.organization} (${inv.period})`).join('\n')}

Use !involvement/[id] to view details (e.g., !involvement/index-competitive)
          `);
        }
        break;

      case '!contact':
        addLine('output', `
Contact Information:
====================

Email: ${personalInfo.email}
GitHub: ${personalInfo.github}
LinkedIn: ${personalInfo.linkedin}
Schedule a call: ${personalInfo.calendly}

For consulting, freelance work, or hackathon collaborations, reach out via email
or schedule a call on Calendly. Let's build something great together!
        `);
        break;

      case '!socials':
        addLine('output', `
Social Links:
=============

  GitHub:    ${personalInfo.github}
  LinkedIn:  ${personalInfo.linkedin}
  Email:     mailto:${personalInfo.email}
  Calendly:  ${personalInfo.calendly}
        `);
        break;

      default:
        addLine('error', `Command not found: ${trimmedCmd}`);
        addLine('output', 'Type !help to see available commands.');
        break;
    }
  };

  const openEditor = (title: string, content: string) => {
    setEditorTitle(title);
    setEditorContent(content);
    setViewMode('editor');
  };

  const closeEditor = () => {
    setViewMode('terminal');
    addLine('output', '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      processCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  if (viewMode === 'resume' || viewMode === 'resume-fullscreen') {
    const isFullscreen = viewMode === 'resume-fullscreen';
    
    return (
      <div className="h-screen flex flex-col bg-[#1e1e1e] text-[#d4d4d4]">
        {/* Header */}
        <div className="bg-[#2d2d30] border-b border-[#3e3e42] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            <span className="ml-4 text-sm">Resume - Qendrim Beka</span>
          </div>
          <div className="flex items-center gap-4">
            {!isFullscreen && (
              <button
                onClick={() => setViewMode('resume-fullscreen')}
                className="text-xs text-[#858585] hover:text-[#d4d4d4] transition-colors"
              >
                Press 'f' for fullscreen
              </button>
            )}
            {isFullscreen && (
              <button
                onClick={() => setViewMode('resume')}
                className="text-xs text-[#858585] hover:text-[#d4d4d4] transition-colors"
              >
                Press 'f' to exit fullscreen
              </button>
            )}
            <span className="text-xs text-[#858585]">Press 'q' or 'Esc' to close</span>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className={`flex-1 overflow-auto bg-[#1e1e1e] flex items-center justify-center ${isFullscreen ? 'p-0' : 'p-4'}`}>
          <iframe
            src="/resume.pdf"
            className={`bg-white ${isFullscreen ? 'w-full h-full' : 'w-full max-w-4xl h-full rounded'}`}
            title="Resume"
          />
        </div>

        {/* Status Bar */}
        <div className="editor-status-bar flex justify-between">
          <span>RESUME VIEWER</span>
          <div className="flex gap-4">
            <span>Press 'f' to toggle fullscreen</span>
            <span>Press 'q' or 'Esc' to exit</span>
            <a
              href="/resume.pdf"
              download="Qendrim_Beka_Resume.pdf"
              className="hover:underline"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* Capture key events */}
        <input
          type="text"
          className="sr-only"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'q' || e.key === 'Escape') {
              closeEditor();
            } else if (e.key === 'f') {
              setViewMode(isFullscreen ? 'resume' : 'resume-fullscreen');
            }
          }}
          onBlur={(e) => e.target.focus()}
        />
      </div>
    );
  }

  if (viewMode === 'editor') {
    return (
      <div className="h-screen flex flex-col bg-[#1e1e1e] text-[#d4d4d4]">
        {/* Editor Header */}
        <div className="bg-[#2d2d30] border-b border-[#3e3e42] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            <span className="ml-4 text-sm">{editorTitle}</span>
          </div>
          <span className="text-xs text-[#858585]">Press 'q' or 'Esc' to close</span>
        </div>

        {/* Editor Content */}
        <div className="flex-1 overflow-auto p-6 editor-view">
          <pre className="text-sm leading-relaxed whitespace-pre-wrap">{editorContent}</pre>
        </div>

        {/* Status Bar */}
        <div className="editor-status-bar">
          <span>READONLY</span>
          <span className="ml-4">Press 'q' or 'Esc' to exit</span>
        </div>

        {/* Capture key events */}
        <input
          type="text"
          className="sr-only"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'q' || e.key === 'Escape') {
              closeEditor();
            }
          }}
          onBlur={(e) => e.target.focus()}
        />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e]">
      {/* Terminal Header */}
      <div className="bg-[#2d2d30] border-b border-[#3e3e42] px-4 py-2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        <span className="ml-4 text-sm text-[#858585]">qendrim@portfolio ~ %</span>
      </div>

      {/* Terminal Output */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto px-4 py-4 font-mono text-sm"
      >
        {lines.map((line, index) => (
          <div key={index} className={`mb-1 ${line.type === 'input' ? 'text-[#4ec9b0]' : line.type === 'error' ? 'text-[#f48771]' : 'text-[#d4d4d4]'}`}>
            {line.content.split('\n').map((text, i) => (
              <div key={i}>{text || '\u00A0'}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Terminal Input */}
      <form onSubmit={handleSubmit} className="border-t border-[#3e3e42] px-4 py-3 flex items-center gap-2">
        <span className="text-[#4ec9b0]">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-[#d4d4d4] font-mono text-sm"
          placeholder="Type !help to get started..."
          autoFocus
        />
        <span className="text-[#858585] cursor-blink">▊</span>
      </form>
    </div>
  );
}

