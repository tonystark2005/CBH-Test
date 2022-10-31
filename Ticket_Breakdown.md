# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
As we know that currently, the id of each Agent on the reports we generate is their internal database id. 
We want to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.
In order to replace internal database id with custom ids for each agent, we will have to get each Agent's custom id from Agents table.


Ticket 1: 
Get custom id for each agent from the metadata about the agent assigned to each shift (metadata will have internal databse id for each agent) by invoking `getShiftsByFacility` function.
Time estimattion : Factors we should consider for time estimation: Scale of system, architecture of system (monolith/ distributed)
Implementation : 
Monolith Solution:
Simplest solution: Create a hashmap of agent ids (internal ids as keys and custom ids as values).


Ticket 2 : 
Replace internal database id for each agent with each Agent's custom id from Agents table inside `generateReport` function.

Time estimation : 
Factors we should consider for time estimation: Scale of system, architecture of system (monolith/ distributed)
If scale of system is small, this ticket will be relatively easier to resolve. 
If scale of system is huge, that will mean out system is distributed across globe/ countries.  
Implementation: 
For monolith architecture: 
Simple solution : extend functionality of `generateReport` function.
Pass hasmap of agent ids as an argument along with the list of shifts.
Replace internal database id for each agent with each Agent's custom id from the hashmap while generating reports.
