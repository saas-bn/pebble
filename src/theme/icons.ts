import { injectGlobal } from "react-emotion";

export const iconNames = [
  "add",
  "arrow-down",
  "arrow-drop-down",
  "arrow-drop-up",
  "arrow-right",
  "back",
  "calendar",
  "call",
  "car",
  "check",
  "checkbox-selected",
  "checkbox-unfilled",
  "checkbox-unselected",
  "chevron-left",
  "clock",
  "close-circle-filled",
  "close-circle",
  "close",
  "copy",
  "direction",
  "document-uploaded",
  "document",
  "download",
  "edit-2",
  "edit",
  "filter",
  "fire",
  "history",
  "home",
  "info",
  "invoice",
  "junk",
  "location",
  "logout-door",
  "logout",
  "mail",
  "mic",
  "more",
  "note",
  "notification",
  "open-external",
  "pause",
  "phone",
  "play",
  "plus",
  "profile-1",
  "profile",
  "radio-check-filled",
  "radio-check",
  "radio-selected",
  "radio",
  "reschedule",
  "reset",
  "search",
  "share",
  "sms",
  "spinner",
  "unchecked-radio",
  "undo",
  "update",
  "updating",
  "upload",
  "warning",
  "whatsapp"
];

export function initIconStyles() {
  injectGlobal`i {
  line-height: 1;
}

i:before {
  font-family: AnarockIcons !important;
  font-style: normal;
  font-weight: normal !important;
  vertical-align: top;
}

.icon-add:before {
  content: "\f101";
}
.icon-arrow-down:before {
  content: "\f102";
}
.icon-arrow-drop-down:before {
  content: "\f103";
}
.icon-arrow-drop-up:before {
  content: "\f104";
}
.icon-arrow-right:before {
  content: "\f105";
}
.icon-back:before {
  content: "\f106";
}
.icon-calendar:before {
  content: "\f107";
}
.icon-call:before {
  content: "\f108";
}
.icon-car:before {
  content: "\f109";
}
.icon-check:before {
  content: "\f10a";
}
.icon-checkbox-selected:before {
  content: "\f10b";
}
.icon-checkbox-unfilled:before {
  content: "\f10c";
}
.icon-checkbox-unselected:before {
  content: "\f10d";
}
.icon-chevron-left:before {
  content: "\f10e";
}
.icon-clock:before {
  content: "\f10f";
}
.icon-close-circle-filled:before {
  content: "\f110";
}
.icon-close-circle:before {
  content: "\f111";
}
.icon-close:before {
  content: "\f112";
}
.icon-copy:before {
  content: "\f113";
}
.icon-direction:before {
  content: "\f114";
}
.icon-document-uploaded:before {
  content: "\f115";
}
.icon-document:before {
  content: "\f116";
}
.icon-download:before {
  content: "\f117";
}
.icon-edit-2:before {
  content: "\f118";
}
.icon-edit:before {
  content: "\f119";
}
.icon-filter:before {
  content: "\f11a";
}
.icon-fire:before {
  content: "\f11b";
}
.icon-history:before {
  content: "\f11c";
}
.icon-home:before {
  content: "\f11d";
}
.icon-info:before {
  content: "\f11e";
}
.icon-invoice:before {
  content: "\f11f";
}
.icon-junk:before {
  content: "\f120";
}
.icon-location:before {
  content: "\f121";
}
.icon-logout-door:before {
  content: "\f122";
}
.icon-logout:before {
  content: "\f123";
}
.icon-mail:before {
  content: "\f124";
}
.icon-mic:before {
  content: "\f125";
}
.icon-more:before {
  content: "\f126";
}
.icon-note:before {
  content: "\f127";
}
.icon-notification:before {
  content: "\f128";
}
.icon-open-external:before {
  content: "\f129";
}
.icon-pause:before {
  content: "\f12a";
}
.icon-phone:before {
  content: "\f12b";
}
.icon-play:before {
  content: "\f12c";
}
.icon-plus:before {
  content: "\f12d";
}
.icon-profile-1:before {
  content: "\f12e";
}
.icon-profile:before {
  content: "\f12f";
}
.icon-radio-check-filled:before {
  content: "\f130";
}
.icon-radio-check:before {
  content: "\f131";
}
.icon-radio-selected:before {
  content: "\f132";
}
.icon-radio:before {
  content: "\f133";
}
.icon-reschedule:before {
  content: "\f134";
}
.icon-reset:before {
  content: "\f135";
}
.icon-search:before {
  content: "\f136";
}
.icon-share:before {
  content: "\f137";
}
.icon-sms:before {
  content: "\f138";
}
.icon-spinner:before {
  content: "\f139";
}
.icon-unchecked-radio:before {
  content: "\f13a";
}
.icon-undo:before {
  content: "\f13b";
}
.icon-update:before {
  content: "\f13c";
}
.icon-updating:before {
  content: "\f13d";
}
.icon-upload:before {
  content: "\f13e";
}
.icon-warning:before {
  content: "\f13f";
}
.icon-whatsapp:before {
  content: "\f140";
}
`;
}
