import { Flex, Heading } from '@/once-ui/components';
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
      <Heading variant="display-strong-l">Privacy Policy for Promptly Autofill Extension</Heading>
      
      <Flex direction="column" gap="m">
        <Heading variant="heading-strong-s">Effective Date: December 5, 2024</Heading>
        <Heading variant="heading-strong-s">Last Updated: December 5, 2024</Heading>
      </Flex>

      <Flex direction="column" gap="l">
        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">1. Introduction</Heading>
          <p>This Privacy Policy explains how the Promptly Autofill Chrome Extension ("the Extension") collects, uses, and protects your information. By using the Extension, you agree to the collection and use of information in accordance with this policy.</p>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">2. Information We Collect</Heading>
          <p>The Extension accesses specific Gmail message contents only to extract verification codes (e.g., 2FA, OTP) relevant to autofill functionality.</p>
          <p>We do not collect or store:</p>
          <ul>
            <li>Your email address</li>
            <li>Email metadata (sender, subject, timestamp)</li>
            <li>Any unrelated email content</li>
          </ul>
          <p>The Extension uses the following Google scope:</p>
          <ul>
            <li><code>https://www.googleapis.com/auth/gmail.readonly</code> (read access to your Gmail messages for OTP extraction only)</li>
          </ul>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">3. How We Use Information</Heading>
          <p>The Extension uses the Gmail API to:</p>
          <ul>
            <li>Detect new incoming messages that contain verification codes.</li>
            <li>Extract the relevant code using regular expressions.</li>
            <li>Autofill the code into supported websites.</li>
          </ul>
          <p>This data is used locally and temporarily—no data is stored, transmitted, or shared with any external servers.</p>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">4. Data Storage and Transmission</Heading>
          <ul>
            <li><strong>Zero server interaction:</strong> All processing occurs within your browser session.</li>
            <li><strong>No persistent storage:</strong> The Extension does not store any user data after it completes its autofill action.</li>
            <li><strong>No analytics or tracking:</strong> We do not log or track usage patterns or user identities.</li>
          </ul>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">5. Third-Party Access</Heading>
          <p>The Extension does not share your data with any third parties.</p>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">6. Data Security</Heading>
          <p>Even though the Extension processes data locally and doesn't store anything:</p>
          <ul>
            <li>It only requests the minimum Gmail scopes necessary.</li>
            <li>All permissions are disclosed in the Chrome Web Store listing.</li>
            <li>OAuth is used for secure, user-consented access to Gmail.</li>
          </ul>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">7. User Control</Heading>
          <p>You may revoke access at any time:</p>
          <ul>
            <li>Go to your Google Account: <a href="https://myaccount.google.com/permissions">https://myaccount.google.com/permissions</a></li>
            <li>Remove access for "Promptly Autofill" or whichever app name is used.</li>
          </ul>
          <p>You can also uninstall the extension from Chrome to immediately disable all functionality.</p>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">8. Changes to This Policy</Heading>
          <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with a revised "Last Updated" date.</p>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">9. Contact</Heading>
          <p>If you have any questions about this Privacy Policy or the Extension, contact:</p>
          <p>Qendrim Beka<br />
          Email: qendrim@ualberta.ca<br />
          Website: <a href="https://www.qendrimbeka.com">https://www.qendrimbeka.com</a></p>
        </Flex>
      </Flex>
    </Flex>
  );
} 