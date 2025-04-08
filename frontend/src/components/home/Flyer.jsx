import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export default function Flyer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (isMobile) {
      setIsOpen(true); // Only open on mobile
    }
  }, []);
    // In your Flyer component
// useEffect(() => {
//   const hasSeenFlyerRecently = localStorage.getItem('lastSeenFlyer');
//   const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  
//   if (!hasSeenFlyerRecently || Date.now() - parseInt(hasSeenFlyerRecently) > oneDay) {
//     setIsOpen(true);
//     localStorage.setItem('lastSeenFlyer', Date.now().toString());
//   }
// }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} >
      <DialogContent className="max-w-sm rounded-xl  bg-white h-full  p-6 text-center shadow-lg">
        <DialogClose asChild>
          <Button className="absolute  right-2 focus:outline-none focus:ring-0 text-gray-600" variant="ghost">
            
          </Button>
        </DialogClose>

        <h2 className="text-2xl font-bold  text-blue-900">Airlines Reservations and Bookings</h2>
        <div className=" border-b border-gray-300" />
        <img src="/images/airlinelogo.png" alt="log"/>
        <p className="text-gray-900 text-lg font-semibold">24/7 Reservations & Support</p>
        
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button className="bg-blue-900 rounded-xl  text-white">New Booking</Button>
          <Button className="bg-blue-900 rounded-xl  text-white">Changes</Button>
          <Button className="bg-blue-900 rounded-xl  text-white">Cancellation</Button>
          <Button className="bg-blue-900 rounded-xl  text-white">Customer Service</Button>
        </div>

        <div className="mt-6 flex flex-col items-center">
            {/* <img src="/images/airlineflyer.png" alt="pic" className="w-52"/> */}
            <img src="/images/callinggirl.png" alt="call" className="w-20 rounded-full border-gray-400 border-4"/>
          <p className="text-lg font-bold text-gray-900">No Hold - Call Answered in 5 Sec</p>
          <Button className="mt-2 flex items-center gap-2 w-full bg-blue-900 text-white px-4 py-2  rounded-lg h-12 text-lg">
            <PhoneCall className="w-10  h-10  " /> 1-888-928-1369
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
