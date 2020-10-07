import { getDecryptedLabels } from "../../utils/lang";

export const DEFAULT_LANG = "xx";
export const EN_LANG = "en";

const encryptedLabels = {
  xx_lang_content: "Encrypted",
  en_lang_content: "W\"y {'z",
  hero_content: "fz{'2{'2W\"u&-$(#&",
  description_content:
    'Sv*s"uwv2#" {"w2x{ w2w"u&-$({#"2s"v2vwu&-$({#"@2ewu)&w2s"-2x{ w2(-$w2s"v2!s{"(s{"2-#)&2$&{*su-3',
  upload_content: "Uz##'w2x{ w3",
  footer_content: "Vw*w #$wv2t-2'{yz'{yz2A2z(($'LAAy{(z)t@u#!A'{yz'{yz",
};

const decryptedLabels = getDecryptedLabels(encryptedLabels);

export const dictionary = {
  [DEFAULT_LANG]: encryptedLabels,
  [EN_LANG]: decryptedLabels,
};
