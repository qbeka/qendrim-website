import { Flex, Heading } from '@/once-ui/components';
import { unstable_setRequestLocale } from 'next-intl/server';

export async function generateStaticParams() {
  return [{ locale: 'en' }];
}

export default function TermsOfService({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <Flex 
      fillWidth maxWidth="m"
      direction="column"
      gap="l"
      paddingBottom="xl"
    >
      <Heading variant="display-strong-l">Terms of Service for Promptly Autofill Extension</Heading>
      
      <Flex direction="column" gap="m">
        <Heading variant="heading-strong-s">Effective Date: December 5, 2024</Heading>
        <Heading variant="heading-strong-s">Last Updated: December 5, 2024</Heading>
      </Flex>

      <Flex direction="column" gap="l">
        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">1. Acceptance of Terms</Heading>
          <p>By installing and using the Promptly Autofill Chrome Extension ("the Extension"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Extension.</p>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">2. Description of Service</Heading>
          <p>The Extension provides automated extraction and autofill of verification codes (e.g., OTP, 2FA) from your Gmail account to supported websites.</p>
          <p>All processing is performed locally in your browser. The Extension does not store, transmit, or share your data.</p>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">3. Eligibility</Heading>
          <p>You must:</p>
          <ul>
            <li>Be at least 13 years old.</li>
            <li>Have a valid Google account.</li>
            <li>Use the Extension in compliance with local laws and Google's API terms.</li>
          </ul>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">4. Permissions and Google API Use</Heading>
          <p>The Extension uses Google's OAuth system and the following scope:</p>
          <ul>
            <li><code>https://www.googleapis.com/auth/gmail.readonly</code> — to detect and extract verification codes.</li>
          </ul>
          <p>You grant the Extension permission to access Gmail only for the purpose of parsing verification messages.</p>
          <p>We do not access, store, or share email content beyond what is required for autofill functionality.</p>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">5. Limitations</Heading>
          <p>You agree not to:</p>
          <ul>
            <li>Reverse engineer or tamper with the Extension.</li>
            <li>Use it for any unlawful purpose or in violation of Google's Terms of Service.</li>
            <li>Attempt to bypass its security features or alter its intended functionality.</li>
          </ul>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">6. Disclaimers</Heading>
          <p>The Extension is provided "as is" without warranties of any kind.</p>
          <ul>
            <li>We do not guarantee compatibility with every website or service.</li>
            <li>We are not responsible for missed, incorrect, or delayed autofill actions.</li>
          </ul>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">7. Termination</Heading>
          <p>We reserve the right to:</p>
          <ul>
            <li>Suspend or terminate access at any time for any reason,</li>
            <li>Modify or discontinue the Extension without notice.</li>
          </ul>
          <p>You may uninstall the Extension at any time to discontinue use.</p>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">8. Privacy</Heading>
          <p>Your use of the Extension is also governed by our <a href="/work/autofill/privacypolicy">Privacy Policy</a>.</p>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">9. Changes to the Terms</Heading>
          <p>We may update these Terms of Service from time to time. Continued use of the Extension after changes are posted constitutes your acceptance of the new terms.</p>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">10. Contact</Heading>
          <p>For questions or concerns:</p>
          <p>Qendrim Beka<br />
          Email: qendrim@ualberta.ca<br />
          Website: <a href="https://www.qendrimbeka.com">https://www.qendrimbeka.com</a></p>
        </Flex>
      </Flex>
    </Flex>
  );
} 