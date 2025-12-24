const webhookURL = "https://discord.com/api/webhooks/1453356913868931135/aUIQNXMaLW10zYCT-wgdmBJltz6_ISZHNzsbaCqm9lvPLiWZMMuq1ephjRlqIwxaA045";

document.getElementById("forumForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const data = {
        username: "Bewerbungen",
        embeds: [
            {
                title: "📥 Neue Bewerbung",
                color: 5763719,
                fields: [
                    { name: "Minecraft-Name", value: formData.get("minecraft"), inline: true },
                    { name: "Discord-Name", value: formData.get("discord"), inline: true },
                    { name: "Alter", value: formData.get("alter"), inline: true },
                    { name: "Plotnummer", value: formData.get("anzahl"), inline: true },
                    {
                        name: "Zusatz",
                        value: formData.get("zusatz") || "—",
                        inline: false
                    }
                ],
                footer: {
                    text: "Archi-Bewerbung"
                },
                timestamp: new Date()
            }
        ]
    };

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        alert("Anmeldung erfolgreich gesendet!");
        this.reset();
    })
    .catch(() => {
        alert("Fehler beim Senden!");
    });
});
