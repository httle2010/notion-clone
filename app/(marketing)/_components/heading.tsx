"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="mrelative z-10 max-w-3xl text-center px-6ax-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">
                Your Ideas, Documents, & Plans. Unified. Welcome to <span 
                className="underline">Jotion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Jotion is the connected workspace where <br />
                better, faster work happens.
            </h3>
            <Button>
                Enter Jotion
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>

        </div>
    )
}