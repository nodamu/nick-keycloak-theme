import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withExtraLanguages({})
    .withCustomTranslations({
        en: {
            smsAuthTitle: "Lyte ID",
            smsAuthLabel: "Phone Number",
            smsAuthInstruction: "Enter the code we sent to your device.",
            smsAuthCodeInvalid: "Invalid SMS code entered, please enter it again.",
            smsAuthCodeExpired: "The SMS code has expired.",
            smsAuthSmsNotSent: "The SMS could not be sent, because of {0}",
        },
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
