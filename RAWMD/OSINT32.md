## OSINT challenge #032


It is always a good day when Sofia posts another OSINT challenge to https://gralhix.com/list-of-osint-exercises/ ! 

This one did not give you much to work with, just a 32 second video of a news brodcast being played on a public TV of some kind. We are asked to find both 

a) Determine the exact date and time when the video was recorded.
b) Identify the airport and the terminal where the TV screen was located.

THe first thing that jumped out to me was the Hindi language, this immidetly pointed to India as a country of interest. Using google translate I was able to get the station name fairly quicky "TV9 Bharatvarsh" is a relitively new brodcasting company, but has quickly spread to be one of the most popular in India. One nice thing is they have an extremely active youtube channel, posting seemingly all of there content to it! After using google translate to see the content the main story was on a F-16 crash in Ukriane, unfortunetly TV9 Bharatvarsh has a 24/7 stream on the Russo-Ukrainian War, which means they mention the F-16 a LOT.

My next approch was translating one of the "breaking news" events in the scrolling ticker at the bottom of the screen. One that seemed promicing was Sharad Pawar saying "We will not sit silent for the next 2 months" Looking this up was able to give me a general date, than combining that with a google search to filter the results for that target timeframe (https://www.google.com/search?q=%22TV9+Bharatvarsh%22+f-16+%E0%A4%B6%E0%A4%B0%E0%A4%A6+%E0%A4%AA%E0%A4%B5%E0%A4%BE%E0%A4%B0&client=firefox-b-1-e&sca_esv=ad3bfb9a4481301e&channel=entpr&udm=7&biw=2540&bih=936&tbs=cdr%3A1%2Ccd_min%3A8%2F31%2F2024%2Ccd_max%3A9%2F2%2F2024&sxsrf=AE3TifNgl3sdNPJ7cxIpcCf0yFzbhw2dSQ%3A1757023687132&ei=xw26aNfqB9SJkPIPuv3NkQ8&ved=0ahUKEwiX6u6lj8CPAxXUBEQIHbp-M_IQ4dUDCBE&uact=5&oq=%22TV9+Bharatvarsh%22+f-16+%E0%A4%B6%E0%A4%B0%E0%A4%A6+%E0%A4%AA%E0%A4%B5%E0%A4%BE%E0%A4%B0&gs_lp=EhZnd3Mtd2l6LW1vZGVsZXNzLXZpZGVvIi0iVFY5IEJoYXJhdHZhcnNoIiBmLTE2IOCktuCksOCkpiDgpKrgpLXgpL7gpLAyBRAAGO8FMggQABiABBiiBDIFEAAY7wUyBRAAGO8FSKh2UI0GWNtxcAF4AJABAJgBdKABzAGqAQMxLjG4AQPIAQD4AQH4AQKYAgOgAt4BwgIHECMYJxiuApgDAIgGAZIHAzIuMaAHrgeyBwMxLjG4B9gBwgcDMi0zyAcM&sclient=gws-wiz-modeless-video) was able to get me a small list of videos to sift through! 

Eventually I came across something that matched my target fairly well (https://www.youtube.com/watch?v=azrjVevj-_M) it is not an exact 1 to 1 match, however I am fairly certan TV9 Bharatvarsh does differant streams for local and internet brodcasts, which would explain the differance. Given the date and footage used I am fairly confident in being able to confirm the date as Septermber 1st 2024, 9:14PM.

Part B was a little bit harder and I was lost on where to start. The video includes very little to start with in terms of geolocation. The only real info I had was the language spoken and the country, knowing that the brodcast was in Hindi helped me limit my search to centeral and north-western india. I started my search by looking for the most popular international airports in the regein and ended up checking out the New Delhi airport first. Using google search image results, I was able to very quickly find that the glass in Terminal 3 matched with the video exactly (https://upload.wikimedia.org/wikipedia/commons/f/f4/Terminal_3_Interior_-_Indira_Gandhi_International_Airport_-_New_Delhi_2016-08-08_9232.JPG), but I was really struggling to find a match for the actual TV units.

I eventually moved away from Google Images and started using street view to view 360degree images from inside terminal 3. I still was not having much luck until I found a photo (https://www.google.com/search?q=%22TV9+Bharatvarsh%22+f-16+%E0%A4%B6%E0%A4%B0%E0%A4%A6+%E0%A4%AA%E0%A4%B5%E0%A4%BE%E0%A4%B0&client=firefox-b-1-e&sca_esv=ad3bfb9a4481301e&channel=entpr&udm=7&biw=2540&bih=936&tbs=cdr%3A1%2Ccd_min%3A8%2F31%2F2024%2Ccd_max%3A9%2F2%2F2024&sxsrf=AE3TifNgl3sdNPJ7cxIpcCf0yFzbhw2dSQ%3A1757023687132&ei=xw26aNfqB9SJkPIPuv3NkQ8&ved=0ahUKEwiX6u6lj8CPAxXUBEQIHbp-M_IQ4dUDCBE&uact=5&oq=%22TV9+Bharatvarsh%22+f-16+%E0%A4%B6%E0%A4%B0%E0%A4%A6+%E0%A4%AA%E0%A4%B5%E0%A4%BE%E0%A4%B0&gs_lp=EhZnd3Mtd2l6LW1vZGVsZXNzLXZpZGVvIi0iVFY5IEJoYXJhdHZhcnNoIiBmLTE2IOCktuCksOCkpiDgpKrgpLXgpL7gpLAyBRAAGO8FMggQABiABBiiBDIFEAAY7wUyBRAAGO8FSKh2UI0GWNtxcAF4AJABAJgBdKABzAGqAQMxLjG4AQPIAQD4AQH4AQKYAgOgAt4BwgIHECMYJxiuApgDAIgGAZIHAzIuMaAHrgeyBwMxLjG4B9gBwgcDMi0zyAcM&sclient=gws-wiz-modeless-video
) from 2023 which had the exact TV stands I was looking for! I am fairly sure sometime in 2020-2021 all of the old "samsung" TV stands were replaced with the moden looking black/grey ones! Because most of the photos were uploaded pre 2020, this made confirming the airport extremely hard!



recognised hindi, was able to find station name

from there went to google translate to translate news headlines

first tried to identify video date based on f-16 content, but they put out too much

"We will not sit silent for the next 2 months - Sharad Pawar" was much more identifying, gave me a narrow band of dates to search

found a video from September 1st 2024 that seems to match fairly well, even with the TopGun Maveric footage! It is not an exact 1 to 1 match, however I am fairly certan TV9 Bharatvarsh does differant streams for local and internet stuff, which would explain the differance

https://www.youtube.com/watch?v=azrjVevj-_M

https://www.google.com/search?q=%22TV9+Bharatvarsh%22+f-16+%E0%A4%B6%E0%A4%B0%E0%A4%A6+%E0%A4%AA%E0%A4%B5%E0%A4%BE%E0%A4%B0&client=firefox-b-1-e&sca_esv=ad3bfb9a4481301e&channel=entpr&udm=7&biw=2540&bih=936&tbs=cdr%3A1%2Ccd_min%3A8%2F31%2F2024%2Ccd_max%3A9%2F2%2F2024&sxsrf=AE3TifNgl3sdNPJ7cxIpcCf0yFzbhw2dSQ%3A1757023687132&ei=xw26aNfqB9SJkPIPuv3NkQ8&ved=0ahUKEwiX6u6lj8CPAxXUBEQIHbp-M_IQ4dUDCBE&uact=5&oq=%22TV9+Bharatvarsh%22+f-16+%E0%A4%B6%E0%A4%B0%E0%A4%A6+%E0%A4%AA%E0%A4%B5%E0%A4%BE%E0%A4%B0&gs_lp=EhZnd3Mtd2l6LW1vZGVsZXNzLXZpZGVvIi0iVFY5IEJoYXJhdHZhcnNoIiBmLTE2IOCktuCksOCkpiDgpKrgpLXgpL7gpLAyBRAAGO8FMggQABiABBiiBDIFEAAY7wUyBRAAGO8FSKh2UI0GWNtxcAF4AJABAJgBdKABzAGqAQMxLjG4AQPIAQD4AQH4AQKYAgOgAt4BwgIHECMYJxiuApgDAIgGAZIHAzIuMaAHrgeyBwMxLjG4B9gBwgcDMi0zyAcM&sclient=gws-wiz-modeless-video

September 1st 2024

The time is given in the video, 9:14PM

Step two is much harder

Honestly do not know where to start

Only main tip to go on is the TV is on a hindi language channel, which allows us to focus our search on more centeral and northwest india.

Started with a list of international airports and by chance did New Delhi first

https://upload.wikimedia.org/wikipedia/commons/f/f4/Terminal_3_Interior_-_Indira_Gandhi_International_Airport_-_New_Delhi_2016-08-08_9232.JPG

The windows match

Terminal 1 has flat windows

Terminal 2 is currently under reconstruction, but in 2024 it did not match the design of the video

Terminal 3 has matching windows, and is the big international one.

After giving up on google images, I switched to looking at static 360 photos posted on google maps! After some digging in terminal 3 I was able to find this! Which matches nearly perfectly.

https://www.google.com/maps/place/Terminal+3,+Delhi+110037/@28.5518502,77.0822565,3a,19.9y,346.9h,89.38t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICp24XR6AE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HagbXQnek940cMqyul-mTs85K3r7zAHEKJS_FrzuxpG0vlmW_Vj3daZ7SeRljeuLMQ6OcbGkczsJdgSh6PsBpERqSlJgzE8yVZjqXklThYYGB6lmrjWEz6cYHoA1HZcjLXdJ0ze_A%3Dw900-h600-k-no-pi0.619816442479248-ya313.903353812198-ro0-fo100!7i10240!8i5120!4m6!3m5!1s0x390d1b9993a248df:0x28f954cbf617fd67!8m2!3d28.5550838!4d77.0844015!16s%2Fg%2F12hls6zcr?entry=ttu&g_ep=EgoyMDI1MDkwMi4wIKXMDSoASAFQAw%3D%3D

I think they may have switched out all the TVs from stands that said samsung to the moden looking black/grey ones sometime in 2020-2021, maybe during COVID shutdowns

