import navigationFR from "./fr-FR/navigation";
import fixedContentFR from "./fr-FR/fixed-content";
import elementsFR from "./fr-FR/elements";

import navigationEN from "./en-EN/navigation";
import fixedContentEN from "./en-EN/fixed-content";
import elementsEN from "./en-EN/elements";

const datas = {
  "fr-FR": {
    navigation: navigationFR,
    fixedContent: fixedContentFR,
    elements: elementsFR,
  },
  "en-EN": {
    navigation: navigationEN,
    fixedContent: fixedContentEN,
    elements: elementsEN,
  },
};

export default datas;
