## PCB Business Card: The ProtoPCB Project

The ProtoPCB is a unique business card that packs a a ATTINY3227 chipset, a 256 LED matrix, and interactive games into a business card sized PCB. Powered by a CR2032 battery and having 3 low profile buttons as inputs the possibilities are nearly endless.

## Descriptions 

The ProtoPCB is based on the ATTINY3227 chipset, this interacts with the 4 74HC595D shift registers which run the 256 LEDs resulting in a very tightly packed matrix display. It is programmed with a built in UDPI interface and is also comparable with a 3d printed programming jig for easy software flashes. The current code on GitHub includes examples for basic LED test programs along with a simple game of snake, with more exciting games like Pong, Tic Tac Toe, and Tetris planned for sometime in the future(tm)

## Technical Details

The face of the pcb, the 256 LED matrix, is controlled by four 74HC595D shift registers put in series (U1, U2, U3, and U4). The shift register U3 is intentionally reversed to allow easier routing on the PCB. Power is provided by a CR2032 3V cell attached to the back of the PCB. In the future I would like to find a way to slim down the PCB by sandwiching the battery in the pcb vs soldering the connector onto the back of the PCB.

## Challenges

One of my key design goals was for these boards to be CHEEP. I did not want to feel bad about giving these out to people, after all that would ruin the purpose of a business card in the first place! When I bought my first prototypes, I got the price per PCB down under 5 dollars. About 3 months after I got into this project a small thing called COVID-19 had a large effect on the availability of parts. At one time the price for just one of the ATTINY3227 chips that were used in this project neared 5 dollars. This created a huge challenge for getting these made at the price point I felt comfortable with. I ended up spending a lot of time on Chinese marketplace websites to source my chips and within a couple weeks I was able to secure a much better deal on the processor and production was back online!

Another challenge I had in the early days of production was soldering! The ATTINY3227 microcontroller is SMALL! The overall package is only 4x4mm. At first I was trying to get away with soldering with a basic hot air gun which turned out to be a horrible idea! Eventually I caved and bought a pcb hotplate which worked a lot better.