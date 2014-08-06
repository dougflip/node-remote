## Overview

In general, split this into two projects: api and client

The server will just be a REST API now. The client will remain an angular app.

This will still be just a Linux supported project for now, but the split should help to make this cross platform.
The client will work (because it is browser based) across as is.
The REST interface should remain the same.
If we wanted to implement cross platform we would just need to re-implement the core libs for different OSs.

## REST API Overview

I think the REST interface should be very generic now.
The angular app will house more smarts (which could potentially make cross platform harder).
For example, in order to "full screen" Netflix reliably, you need to perform two steps.
Focus the silverlight player (by clicking on it) and then send the "f" key.
Could take two approaches here:

1. Expose a /netflix/fullScreen route and hide this logic server side or
2. Have the client make two explicit and different calls. First move click the mouse at a known location and then send "f"

The reason I am leaning towards client smarts is so that I don't have API explosion.
I can lock down the API to a general interface and the have the client piece them together as needed.
This *could* make cross platform hard though because the multiple steps to perform an action on one OS
may not necessarily be the way to perform the action on another OS.
I definitely don't want to create multiple clients to support multi OS.
But again, if I do this on the server, I can see an action like this taking the following code

- implement client controller method
- implement client service method
- implement server controller (plus route)
- implement client lib method

If this was a client side only piece then just the first two would apply.
Seems like much less surface area.
