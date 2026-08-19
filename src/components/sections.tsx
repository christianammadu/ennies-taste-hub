import {
  Clock,
  HandPlatter,
  Heart,
  Leaf,
  PartyPopper,
  Soup,
  Sparkles,
  Utensils,
} from "lucide-react";

export function StorySection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
      <img
        src="/images/founder-story.jpg"
        alt="Ennie, founder and chef of Ennieskitchen, wearing chef whites."
        className="w-full rounded-3xl object-cover shadow-lg"
        loading="lazy"
      />

      <div>
        <p className="font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Our story
        </p>

        <div className="mt-4 space-y-4 text-muted-foreground">
          <p>
            If there's one thing that has always been a part of my life, it's
            good food.
          </p>

          <p>
            I was blessed to grow up surrounded by amazing women who loved to
            cook. Both of my grandmothers were incredible cooks, and my mom is
            an excellent cook too. Some of my favorite childhood memories are
            of watching my mom in the kitchen. I was always curious—asking
            questions, paying attention to every step, and finding little ways
            to help. Before I knew it, I had fallen in love with cooking.
          </p>

          <p>
            I didn't learn to cook from a cookbook. I learned by watching,
            tasting, practicing, and spending time in the kitchen with my
            family. That's where I discovered that cooking isn't just about
            following a recipe. It's about patience, generosity, and putting
            your heart into every meal.
          </p>

          <p>
            As I got older, that love for cooking only grew stronger. I found so
            much joy in feeding people and seeing how a good meal could bring
            family and friends together. Eventually, what started as something
            I simply loved doing became Ennieskitchen.
          </p>

          <p>
            Today, every meal we prepare is made fresh because that's the only
            way I know how to cook. Whether you're ordering lunch for your
            family, catering a wedding, celebrating a birthday, or hosting a
            corporate event, I want you to enjoy food that tastes like it was
            made with care—not mass-produced.
          </p>

          <p>
            Ennieskitchen is my way of sharing the flavors I grew up with and
            the traditions that shaped me. Every order is personal because I
            know you're trusting us with your table and your special moments,
            and that's something I never take for granted.
          </p>

          <p>
            Thank you for being here and for allowing Ennieskitchen to be a
            part of your story. I hope that every meal we serve brings people
            together, starts conversations, and creates memories you'll always
            remember.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FounderSection() {
  return (
    <section className="bg-secondary/50 py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Meet the founder
          </p>

          <h2 className="mt-3 font-display text-3xl font-black text-brand-brown sm:text-4xl">
            Meet Ennie
          </h2>

          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>Hi, I’m Ennie, the founder and chef behind Ennieskitchen.</p>

            <p>
              To me, cooking has always been about people. I love being able to
              make something with my hands and have it bring happiness to
              someone else. Whether it’s feeding a family, helping someone
              celebrate a special occasion, or simply giving someone a meal
              that reminds them of home, that’s the part of cooking I love the
              most.
            </p>

            <p>
              When I started Ennieskitchen, I wanted to create a place where
              people could enjoy the Nigerian food I love while also
              experiencing the care that goes into making it. I want my food to
              feel like something you would proudly put on your own family’s
              table.
            </p>

            <p>
              Over the years, I’ve been blessed to cook for families,
              celebrations, organizations, celebrities, and professional
              athletes. Those experiences mean a lot to me, but honestly, some
              of my favorite moments are when a customer comes back and says,
              “Ennie, that food was so good,” or tells me that it reminded them
              of home.
            </p>

            <p>Those are the moments that make all the hard work worth it.</p>

            <p>
              Ennieskitchen is something I’m deeply proud of. It’s my way of
              sharing my love for food, my culture, and the joy that comes from
              feeding people.
            </p>

            <p>
              Thank you for choosing Ennieskitchen and allowing me to be a
              small part of your table and your special moments. I’m grateful
              for every order, every customer, and everyone who continues to
              support this journey.
            </p>

            <p>I can’t wait to cook for you.</p>
          </div>
        </div>

        <img
          src="/images/founder-chef.jpg"
          alt="Ennie, founder and chef of Ennieskitchen, wearing chef whites."
          className="order-1 w-full rounded-3xl object-cover shadow-lg lg:order-2"
          loading="lazy"
        />
      </div>
    </section>
  );
}

const REASONS = [
  {
    icon: Soup,
    body: "Our Meal tastes homemade, not mass-produced.",
  },
  {
    icon: Leaf,
    body: "Freshly prepared for your order, so every tray gets the attention it deserves.",
  },
  {
    icon: Utensils,
    body: "Recipes passed down through generations, cooked with pride and authenticity.",
  },
  {
    icon: PartyPopper,
    body: "Generous portions, rich flavors, and food people actually remember.",
  },
  {
    icon: Sparkles,
    body: "We keep it simple: good food, honest service, and happy customers.",
  },
  {
    icon: HandPlatter,
    body: "Every meal is cooked to be shared and enjoyed, just like at home.",
  },
  {
    icon: Clock,
    body: "We don't rush your food, we prepare every order with patience and care to ensure the best quality and taste.",
  },
  {
    icon: Heart,
    body: "When you choose Ennieskitchen, you're choosing a team that genuinely cares about your experience from the first conversation to the last bite.",
  },
];

export function WhyChoose() {
  return (
    <section className="pattern-lines border-y border-border py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center font-display text-3xl font-black text-brand-brown sm:text-4xl">
          Why choose Ennieskitchen
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, body }) => (
            <div
              key={body}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <Icon className="h-8 w-8 text-brand-orange" />
              <p className="mt-4 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
