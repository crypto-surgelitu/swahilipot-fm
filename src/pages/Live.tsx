import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Video = () => {
    return (
        <div className="container md:min-h-screen mx-auto px-4 py-8">
            <div className="mb-6">
                <Button variant="ghost" className="rounded-full pl-3" asChild>
                    <Link to="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Livestream</h1>
            
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
                <iframe 
                    src="https://player.restream.io/?token=68d2f8a7eac34f1c849a452c55ac1287&autoplay=1" 
                    className="w-full h-full border-0" 
                    allow="autoplay" 
                    title="Swahilipot FM Live Stream"
                ></iframe>
            </div>
        </div>
    );
};

export default Video;
