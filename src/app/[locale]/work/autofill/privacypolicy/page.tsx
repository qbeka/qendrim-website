import { Flex, Heading, Text } from '@/once-ui/components';
import { unstable_setRequestLocale } from 'next-intl/server';

export async function generateStaticParams() {
  return [{ locale: 'en' }];
}

export default function PrivacyPolicy({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <Flex 
      fillWidth maxWidth="m"
      direction="column"
      gap="l"
      paddingBottom="xl"
    >
      <Heading variant="display-strong-l">Privacy Policy for Gmail Code Autofill Extension</Heading>
      
      <Flex direction="column" gap="m">
        <Heading variant="heading-strong-s">Effective Date: December 5, 2024</Heading>
        <Heading variant="heading-strong-s">Last Updated: December 5, 2024</Heading>
      </Flex>

      <Flex direction="column" gap="l">
        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">1. Introduction</Heading>
          <Text>This Privacy Policy explains how the Gmail Code Autofill Chrome Extension ("the Extension") collects, uses, and protects your information. By installing or using the Extension, you acknowledge that you have read, understood, and agree to be bound by the collection and use of information in accordance with this policy.</Text>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">2. Information We Collect</Heading>
          <Text>The Extension accesses specific Gmail message contents solely to extract verification codes (e.g., two-factor authentication codes, one-time passwords) relevant to the autofill functionality.</Text>
          <Text>We do not collect or store:</Text>
          <ul>
            <li>Your email address</li>
            <li>Email metadata (sender information, subject lines, timestamps)</li>
            <li>Any email content unrelated to verification codes</li>
            <li>Browsing history or personal information</li>
          </ul>
          <Text>The Extension uses the following Google API scope:</Text>
          <ul>
            <li><code>https://www.googleapis.com/auth/gmail.readonly</code> (read-only access to Gmail messages for the explicit purpose of verification code extraction)</li>
          </ul>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">3. How We Use Information</Heading>
          <Text>The Extension uses the Gmail API exclusively to:</Text>
          <ul>
            <li>Detect new incoming messages that may contain verification codes</li>
            <li>Extract the relevant code using regular expressions and pattern matching</li>
            <li>Autofill the extracted code into supported website form fields</li>
          </ul>
          <Text>All data processing occurs locally within your browser session. No data is stored, transmitted, or shared with any external servers, third parties, or other services.</Text>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">4. Data Storage and Transmission</Heading>
          <ul>
            <li><strong>Zero server interaction:</strong> All processing occurs exclusively within your browser session</li>
            <li><strong>No persistent storage:</strong> The Extension does not maintain any persistent storage of user data after completing its autofill action</li>
            <li><strong>No analytics or tracking:</strong> We do not implement any analytics, tracking, or monitoring of usage patterns or user identities</li>
            <li><strong>No data transmission:</strong> Your verification codes and email contents never leave your local browser environment</li>
          </ul>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">5. Third-Party Access</Heading>
          <Text>The Gmail Code Autofill Extension operates entirely locally and does not share your data with any third parties, including but not limited to:</Text>
          <ul>
            <li>Analytics providers</li>
            <li>Advertising networks</li>
            <li>Data brokers</li>
            <li>Other service providers</li>
          </ul>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">6. Data Security</Heading>
          <Text>Despite the Extension's client-side processing and lack of data storage, we implement the following security measures:</Text>
          <ul>
            <li>Requesting only the minimum Gmail API scopes necessary for functionality</li>
            <li>Full disclosure of all permissions in the Chrome Web Store listing</li>
            <li>Implementation of OAuth for secure, user-consented access to Gmail</li>
            <li>Regular security reviews of our codebase</li>
          </ul>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">7. User Control</Heading>
          <Text>You maintain full control over the Extension's access and can revoke permissions at any time:</Text>
          <ul>
            <li>Go to your Google Account settings: <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">https://myaccount.google.com/permissions</a></li>
            <li>Locate and remove access for "Gmail Code Autofill"</li>
          </ul>
          <Text>Additionally, you can uninstall the Extension from Chrome at any time to immediately terminate all functionality and access.</Text>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">8. Legal Compliance</Heading>
          <Text>The Gmail Code Autofill Extension is designed to comply with relevant data protection and privacy laws, including the principles of data minimization and purpose limitation. We process only the data necessary to provide the service you explicitly request when installing the Extension.</Text>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">9. Changes to This Policy</Heading>
          <Text>We may update this Privacy Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any modifications will be reflected on this page with a revised "Last Updated" date. We encourage users to review this Privacy Policy regularly for any changes.</Text>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">10. Contact Information</Heading>
          <Text>If you have any questions, concerns, or requests regarding this Privacy Policy or the Extension's privacy practices, please contact:</Text>
          <Text>
            Qendrim Beka<br />
            Email: qendrim@ualberta.ca<br />
            Website: <a href="https://www.qendrimbeka.com" target="_blank" rel="noopener noreferrer">https://www.qendrimbeka.com</a>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
} 