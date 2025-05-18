import { Flex, Heading, Text } from '@/once-ui/components';
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
      <Heading variant="display-strong-l">Terms of Service for Gmail Code Autofill Extension</Heading>
      
      <Flex direction="column" gap="m">
        <Heading variant="heading-strong-s">Effective Date: December 5, 2024</Heading>
        <Heading variant="heading-strong-s">Last Updated: December 5, 2024</Heading>
      </Flex>

      <Flex direction="column" gap="l">
        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">1. Acceptance of Terms</Heading>
          <Text>By installing, accessing, or using the Gmail Code Autofill Chrome Extension ("the Extension"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, you must not install, access, or use the Extension.</Text>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">2. Description of Service</Heading>
          <Text>The Gmail Code Autofill Extension provides automated detection, extraction, and autofill functionality for verification codes (such as one-time passwords and two-factor authentication codes) from your Gmail account to supported websites and applications.</Text>
          <Text>All data processing is performed locally within your browser. The Extension does not store, transmit, or share your data with any servers or third parties.</Text>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">3. Eligibility</Heading>
          <Text>To use the Extension, you must:</Text>
          <ul>
            <li>Be at least 13 years of age</li>
            <li>Possess a valid Google account</li>
            <li>Comply with all applicable local, state, national, and international laws and regulations</li>
            <li>Adhere to Google's Terms of Service and API usage policies</li>
          </ul>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">4. Google API and Permissions</Heading>
          <Text>The Extension utilizes Google's OAuth authentication system and requests the following API scope:</Text>
          <ul>
            <li><code>https://www.googleapis.com/auth/gmail.readonly</code> — this grants read-only access to Gmail messages for the exclusive purpose of detecting and extracting verification codes</li>
          </ul>
          <Text>By installing the Extension, you grant permission to access Gmail solely for the purpose of parsing and extracting verification codes from your messages. The Extension accesses only the minimum data necessary to provide its functionality.</Text>
          <Text>We do not access, store, or share any email content beyond what is strictly required for the verification code extraction and autofill functionality.</Text>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">5. User Obligations and Restrictions</Heading>
          <Text>You agree not to:</Text>
          <ul>
            <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Extension</li>
            <li>Modify, adapt, alter, translate, or create derivative works of the Extension</li>
            <li>Use the Extension for any unlawful purpose or in violation of Google's Terms of Service</li>
            <li>Attempt to bypass security features, authentication measures, or access limitations of the Extension</li>
            <li>Use the Extension in a manner that could interfere with, disrupt, or negatively affect the functionality of the Extension or other users' experience</li>
            <li>Distribute, sublicense, lease, rent, sell, or transfer the Extension to any third party</li>
          </ul>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">6. Disclaimer of Warranties</Heading>
          <Text>The Gmail Code Autofill Extension is provided "as is" and "as available," without warranties of any kind, either express or implied, including but not limited to:</Text>
          <ul>
            <li>The Extension will meet your specific requirements or expectations</li>
            <li>The Extension will be compatible with all websites, applications, or authentication systems</li>
            <li>The Extension will operate without interruption, error, or failure</li>
            <li>Any errors or defects in the Extension will be corrected</li>
          </ul>
          <Text>We expressly disclaim all warranties and conditions, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.</Text>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">7. Limitation of Liability</Heading>
          <Text>To the maximum extent permitted by applicable law, under no circumstances shall the developer of the Gmail Code Autofill Extension be liable for:</Text>
          <ul>
            <li>Any direct, indirect, incidental, special, consequential, or exemplary damages</li>
            <li>Loss of profits, revenue, data, use, goodwill, or other intangible losses</li>
            <li>Damages resulting from interruption of service or inability to access accounts</li>
            <li>Damages resulting from errors in code extraction or autofill functionality</li>
          </ul>
          <Text>This limitation of liability applies regardless of the theory of liability, whether based on contract, tort, negligence, strict liability, or otherwise.</Text>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">8. Termination</Heading>
          <Text>We reserve the right to:</Text>
          <ul>
            <li>Suspend or terminate access to the Extension at our sole discretion, with or without cause</li>
            <li>Modify, update, or discontinue the Extension or any part thereof without prior notice</li>
            <li>Revoke API access if required by Google or necessary for compliance with applicable laws</li>
          </ul>
          <Text>You may terminate your use of the Extension at any time by uninstalling it from your browser or revoking permissions via your Google Account settings.</Text>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">9. Privacy</Heading>
          <Text>Your use of the Gmail Code Autofill Extension is also governed by our <a href="/work/autofill/privacy.html">Privacy Policy</a>, which outlines our data practices regarding information collected and processed by the Extension.</Text>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">10. Modifications to Terms</Heading>
          <Text>We may modify these Terms of Service at any time by posting the revised terms on our website or through the Extension. Your continued use of the Extension after any such changes constitutes your acceptance of the new Terms of Service.</Text>
          <Text>It is your responsibility to review these Terms periodically for changes. If you do not agree to the modified terms, you must discontinue using the Extension.</Text>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">11. Governing Law</Heading>
          <Text>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the developer operates, without regard to its conflict of law provisions.</Text>
        </Flex>

        <Flex direction="column" gap="s">
          <Heading variant="heading-strong-m">12. Contact Information</Heading>
          <Text>For questions, concerns, or requests regarding these Terms of Service or the Extension's operation, please contact:</Text>
          <Text>
            Qendrim Beka<br />
            Email: qendrim@ualberta.ca<br />
            Website: <a href="https://www.qendrimbeka.com">https://www.qendrimbeka.com</a>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
} 