module.exports = function(doc, constant) {
    const { name, category, description, version, example, arParams, returns } = doc;
    let ___  = '\`\`\`';
    let params = arParams.map(param => param.name).join(', ');
    let paramsTable = arParams.map(param=>`| **${param.name}** | \`${param.type}\` | \`${param.default}\` | _${param.description}_ | `).join('\n');
    let page = `## ${name} \n
${___}javascript\n ${name}(${params}) ⇒ ${returns} \n${___} \n\n
\`📢 Version: ${version}\`  \`🏷️ Category: ${constant.EMOJI_LIST[category]} ${category}\` \`🎖️ Author: jasp402\` \n
### Description \n\n
?> ${description} \n\n
| Param | Type | Default value | Description |
| --- | --- | --- | --- |
${paramsTable}
\n\n
### Example \n\n
[runkit website](${__dirname}/../../docs/examples/${name}.html ':include :type=iframe width=100% height=100%')
\n\n`;
    return page;
};