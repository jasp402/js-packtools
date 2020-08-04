module.exports = function(doc, constant) {
    const { name, category, description, version, example, arParams, returns } = doc;

    let exampleCode = example && example !== '@example' ? `![LABEL](${example.split('raw')[0]}raw/${name}.js ':include :type=code')` : '``` \n ⚠️Example missing \n```';

    let ___  = '\`\`\`';
    let params = arParams.map(param => param.name).join(', ');
    let paramsTable = arParams.map(param=>`| **${param.name}** | \`${param.type}\` | \`${param.default}\` | _${param.description}_ | `).join('\n');
    let page = `## ${constant.EMOJI_LIST[category]} ${name} \n
${___}javascript\n ${name}(${params}) ⇒ ${returns} \n${___} \n\n
\`📢 Version: ${version}\`  \`🏷️ Category: ${category}\` \`🎖️ Author: jasp402\` \n
### 📝 Description \n\n
?> ${description} \n\n
| Param | Type | Default value | Description |
| --- | --- | --- | --- |
${paramsTable}
\n\n
### 🧪 Example \n\n
${exampleCode}
\n\n

[![image](https://user-images.githubusercontent.com/8978470/89190058-8603d500-d566-11ea-914f-284448e5a1b6.png)](https://npm.runkit.com/js-packtools) \n 
Use **RunKit** for run this example, only copy and paste in [RunKit](https://npm.runkit.com/js-packtools)\n

!> See source code on **GitHub** [${name}.js](https://github.com/jasp402/js-packtools/blob/master/lib/${name}.js) 

`;

    return page;
};