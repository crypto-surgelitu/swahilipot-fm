import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { presenters } from '@/data/presentersData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Presenters = () => {
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='mb-12 text-center'>
        <h1 className='text-4xl md:text-5xl font-display font-bold mb-4'>
          Our Presenters
        </h1>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          Meet the voices and personalities that bring Swahilipot FM to life
          every day
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {presenters.map((presenter) => (
          <Card
            key={presenter.id}
            className='overflow-hidden transition-all hover:shadow-lg group'
          >
            <div className='relative aspect-square overflow-hidden'>
              <img
                src={presenter.image ? presenter.image : `https://ui-avatars.com/api/?name=${encodeURIComponent(presenter.name)}&background=random`}
                alt={presenter.name}
                className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300'
                loading="lazy"
              />
            </div>
            <CardContent className='p-6'>
              <h3 className='text-xl font-semibold mb-1'>{presenter.name}</h3>
              <p className='text-muted-foreground mb-4'>{presenter.role}</p>
              <Button
                asChild
                className='w-full bg-[#271d73] hover:bg-[#2295e2]'
              >
                <Link to={`/presenters/${presenter.id}`}>View Profile</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Presenters;
