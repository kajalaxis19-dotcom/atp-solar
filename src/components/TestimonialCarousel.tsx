import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import testimonial1 from "@/assets/testimonial-1.jpg";

const TestimonialCarousel = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonial.1.name'),
      location: t('testimonial.1.location'),
      image: testimonial1,
      rating: 5,
      text: t('testimonial.1.text'),
      savings: t('testimonial.1.savings'),
    },
    {
      name: t('testimonial.2.name'),
      location: t('testimonial.2.location'),
      rating: 5,
      text: t('testimonial.2.text'),
      savings: t('testimonial.2.savings'),
    },
    {
      name: t('testimonial.3.name'),
      location: t('testimonial.3.location'),
      rating: 5,
      text: t('testimonial.3.text'),
      savings: t('testimonial.3.savings'),
    },
    {
      name: t('testimonial.4.name'),
      location: t('testimonial.4.location'),
      rating: 5,
      text: t('testimonial.4.text'),
      savings: t('testimonial.4.savings'),
    },
  ];
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div className="p-1">
                <Card className="hover-lift border-2">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-4 items-start">
                      {testimonial.image && (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      )}
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                        <div className="flex gap-0.5 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-accent text-accent"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-foreground/90 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-semibold">
                      {testimonial.savings}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
