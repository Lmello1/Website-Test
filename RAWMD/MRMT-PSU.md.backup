# MRMT Power Supply Module

## Introduction

The MRMT Power Supply Module is a compact, switch-mode power supply board designed to supply power to standard MRMT racks. It accepts a wide input voltage 8–40VDC, steps it down to 5V and 12V at 4 amps each, and outputs it on a the utility layer DIN 41612 interface providing a total of 68W to the unit.

## Description

This 2U MRMT Module uses a custom sheet metal front plate to allow for easy connections of either XT60, PP15 Anderson connectors, or any other miscellaneous power input via screw terminals. Power regulation is handled by a pair of LM2679SX regulators - one for each rail. The LM26795X regulators allow for up to 7A of output on each rail, however the DIN41612 connectors are only rated for 2A per pin (each rail uses 2 pins to connect to the backplane, thus allowing 4A per rail). Luckily current limiting can be changed very easily by the swappage of a resistor, in the future it would be very cool to have a "battle short" mode to allow the regulators to work at there full capacity for short amounts of time.
<br><br>
Control, monitoring, and communication is all handled by the onboard STM32 microprocessor. I ended up using one that I already had in stock, a STM32C011F4P6. This processor is responsible for monitoring the current draw, temperature, and status of both regulators, reporting this info both to the CANbus utility layer and via 4 status LEDs at the front of the module. By having the power supply in constant communication with the rest of the modules, it allows for dynamic power allocation and the ability to prioritize power delivery to specific modules. It also has the added beneficent of being able to turn off the 12V rail if nothing in the rack is drawing from it as most modules only use 5V. Because this unit spends a lot of its time running under battery power, any power savings is great to take advantage of. 
<br><br>
Thermals are controlled with heat sinks soldered onto the PCB ground plane that are aligned to allow airflow from the back to the front. Currently all cooling is done passively however there are extra pins on the microcontroller and enough space near the back of the unit to stick a fan should the need for active cooling arise during testing.

## Challenges

For me, the biggest challenge was wrapping my head around SMPS design, as a Mechanical Engineer by school I had to start from scratch and work my way up from the bottom. The original idea for this module was to have a SMPS that could also take 120VAC down to the required 5 and 12V, however this idea was quickly abandoned once I saw the amount of work and testing required for high voltage SMPS design in such a small space. Eventually I am sure I will revisit this when I have more design experience (and more money to turn into smoke on a test bench) but for now, having a wall wart to break down to 30VDC is a simple solution.
<br><br>
Since this was the first module for the MRMT project, I had the ability to tweak the MRMT standards when I found things that could be improved. One of the things that I debated with for a while was the two wire communication method to use for the utility layer on the backplane. My go to standard for 2 wire stuff is normally I2C, however due to the modular nature of MRMT, static I2C addresses could become a problem down the line. While I3C, the new version of I2C, does fix this issue, chips supporting I3C are still relatively expensive for my budget
<br><br>
I than went through a number of other options, and eventually decide on using CANbus. The standardization of CANbus made it easy to find a standard module to use on most MRMT boards, and due to the fact that CANbus was originally designed for use in the automotive sector, it is a very robust communication protocol. This makes it great for a use case with a lot of unknowns (hot plugging, unknown new board standards, low quality connectors,...)
## Conclusion
In the end I was able to learn a lot from this project, this was the first power supply design that went beyond basic linear regulators and it was very interesting to learn the theory behind switching mode power supplies. In addition it was very rewarding to see the standards made for MRMT come together to form a cohesive end product. While a power supply on its own may not be very cool, it is the first step towards making cool modules within the MRMT standard.

