const Thanks = data => {
    console.log(data)
    return `
        <DOCTYPE html>
        <html style="margin: 0; padding: 0;">

        <head>
            <title>Thanks</title>
        </head>

        <body style="margin: 0; padding: 0;">
            <br />
            <br />
            <div>Thank you for your reservation!</div>
            <br />
            <br />
        </body>

        </html>

    `;
};

module.exports = { Thanks }