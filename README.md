# JxA-Database
### Guide 📚
- The script will create the backup in the following directory `Database/JxA-Backup-xxxx.sql` and also send the file in a **Discord webhook**.
### Installition ⚒️
- Run the following command in the cmd `npm i discord-webhook-node mysqldump chalk@3.0.0`
- Put the following code in a **Server-Side** Lua code:
```lua
Citizen.CreateThread(function ()
    Wait(20000)
    if GetResourceState("JxA-Database") == "started" then
        StopResource("JxA-Database")
    end
end)
```
### Configuration ⚙️
```json
{
    "Webhook": {
        "URL": "Discord Webhook"
    },
    "Database": {
        "Host": "localhost",
        "User": "root",
        "Password": "",
        "Name": "vrpfx"
    }
}
```
### Copyrights 🧾
- Made By JxA https://jxa.world
**YOU HAVE ALL THE RIGHTS TO SHARE THE SCRIPT ANYWHERE**
