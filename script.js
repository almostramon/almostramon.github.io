const webhookURL = "https://discord.com/api/webhooks/1454219093090631711/22lj1KXr83daFO9yqVolDuyRQGftb8n1B8ybQE8rhcl9Rs4ZIaEADaXeAfw5teMr-Ibq";

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
