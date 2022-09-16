module.exports = {
    parserPreset: {
      parserOpts: { headerPattern: /[-]\s[a-z]{4}[:]\s[a-z]+(.*)/gm }
    },
    extends: ['@commitlint/config-conventional'],
    rules: {
      "type-enum": [0, "always"], //desativa a regra. 
      "type-enum/check-jira-branch-pattern": [2,"always"] //um erro.
    },
    plugins: [
      {
        rules: {
          'type-enum/check-jira-branch-pattern': (parsed, when, _) => {
  
            const JIRA_PATTERN = /jira-[0-9]+$/gm;
            const branchName = parsed.type;
            console.log(branchName, branchName.match(JIRA_PATTERN))
  
            if ((!branchName || !branchName.match(JIRA_PATTERN)) && when === 'always') {
              return [false, `the branch name must follow the pattern ${JIRA_PATTERN}`]
            }
            return [true];
          },
        },
      },
    ]
  }