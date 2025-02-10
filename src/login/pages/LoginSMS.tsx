import { useState } from "react";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';




export default function LoginSMS(props: PageProps<Extract<KcContext, { pageId: "login-sms.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { msg, msgStr } = i18n;
    const [phone, setPhone] = useState('');


    const { url, realm } = kcContext;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayInfo={false}
            headerNode={msg("smsAuthTitle", realm.displayName)}
            infoNode={
                msg("smsAuthInstruction")
            }
        >
        <form id="kc-sms-code-login-form" className={kcClsx("kcFormClass")} action={url.loginAction} method="post">
                <div className={kcClsx("kcFormGroupClass")}>
                    <div className={kcClsx("kcLabelWrapperClass")}>
                        <label htmlFor="code" className={kcClsx("kcLabelClass")}> {msgStr("smsAuthLabel")}</label>
                    </div>
                    <div className={kcClsx("kcInputWrapperClass")}>
                        {/* <input type="number" min="0" inputMode="numeric" pattern="[0-9]*" id="code" name="code" className={kcClsx("kcInputClass")} autoComplete="off" autoFocus /> */}
                         <PhoneInput
                            defaultCountry="gh"
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                        /> 
                    </div>
                </div>
                <div className={kcClsx("kcFormGroupClass", "kcFormSettingClass")}>
                    <div className={kcClsx("kcFormOptionsWrapperClass")}>
                        <span><a href="/">{ msg("backToApplication")}</a></span>
                    </div>

                    <div id="kc-form-buttons" className={kcClsx("kcFormButtonsClass")}>
                        <input name="login" className={kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonBlockClass", "kcButtonLargeClass")} type="submit" value={msgStr("doSubmit")} />
                    </div>
                </div>
            </form>
            
        </Template>
    );
}

