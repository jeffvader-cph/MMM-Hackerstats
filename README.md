# MMM-Hackerstats
MagicMirror Module to display hacker profiles from HacktheBox and TryHackMe

# Installation
* git clone https://github.com/mykle1/MMM-Hackerstats into the ~/MagicMirror/modules directory.
* cd MMM-Hackerstats
* npm install


# Add to config file

    {
        module: "MMM-Hackerstats",
        position: "middle_left",
        config: {
          tryhackme_badgeID: "",  //tryhackme.com/profile > click public profile in upper right section > click "Get Badge ID" > get your badgeID number after /badge/
          hackthebox_badgeID: "",  //hackthebox.eu > go to your profile > clock "Get Badge" > get your badgeID number from the after /badge/
        }
      },
