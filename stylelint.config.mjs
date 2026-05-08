/** @type {import("stylelint").Config} */
const config = {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["custom-media"],
      },
    ],
  },
};

export default config;
