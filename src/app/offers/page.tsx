import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { CheckCircle } from 'lucide-react'
import { Button } from '~/components/ui/button'

const EVERY_PLAN_FEATURES = [
  'Unique design',
  'Responsive layout',
  'SEO optimization',
  'Performance optimization',
  'Security',
  'Maintenance',
]

const OFFERS = [
  {
    title: 'Conceptualist',
    description:
      'Create a unique website that reflects your brand identity in a few days',
    features: EVERY_PLAN_FEATURES,
    price: 1399.99,
  },
  {
    title: 'Visionary',
    description:
      'Create an enhanced website with custom features and integrations',
    features: [
      ...EVERY_PLAN_FEATURES,
      'Custom features',
      'Integrations',
      'Content management system',
    ],
    price: 2799.99,
    variant: 'popular',
  },
  {
    title: 'Advanced',
    description:
      'Create a powerful website with e-commerce capabilities with entirely customisable features and design options.',
    features: [
      ...EVERY_PLAN_FEATURES,
      'Custom features',
      'Integrations',
      'Content management system',
      'E-commerce',
    ],
    price: 4999.99,
    variant: 'premium',
  },
] satisfies {
  title: string;
  description: string;
  features: string[];
  price: number;
  variant?: VariantProps<typeof offerCard>['variant'];
}[]

export default function Offers () {
  return (
    <section className="container pb-64 pt-24">
      <h1 className="text-4xl font-bold">Our offers</h1>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {OFFERS.map(({title, description, features, price, variant}) => (
          <OfferCard
            key={title}
            title={title}
            description={description}
            features={features}
            price={price}
            variant={variant}
          />
        ))}
      </div>
    </section>
  )
}

const offerCard = cva(
  'relative flex h-full flex-col rounded-xl border p-12 transition-all',
  {
    variants: {
      variant: {
        default: 'border-zinc-800 bg-zinc-900/55',
        popular:
          'border-emerald-400 relative hover:-translate-y-8 -translate-y-4 bg-emerald-950/55 ring-4 ring-emerald-400 hover:bg-emerald-900/55',
        premium:
          'border-purple-400 bg-purple-950/55 ring-3 ring-purple-400 hover:bg-purple-900/55',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

type OfferCardProps = VariantProps<typeof offerCard> &
  React.ComponentPropsWithoutRef<'div'> & {
  title: string;
  description: string;
  features: string[];
  price: number;
};

function OfferCard ({
                      variant,
                      title,
                      description,
                      features,
                      price,
                      ...props
                    }: OfferCardProps) {
  return (
    <div
      {...props}
      className={offerCard({
        variant,
        className: props.className,
      })}
    >
      {variant === 'popular' && (
        <span className="absolute -right-1 -top-1 rounded-full bg-emerald-400 px-4 py-2 text-lg font-bold text-black">
          Most popular
        </span>
      )}
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4 text-zinc-400">{description}</p>

      <ul className="mt-8 grid gap-2">
        {features.map(feature => (
          <li key={feature} className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-emerald-400"/>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* price */}
      <span className="my-8 block text-4xl font-bold">${price}</span>

      <Button
        variant="outline"
        size="lg"
        className="mt-auto h-auto w-full py-3 text-lg text-black data-[is-highlighted]:border-emerald-700 data-[is-highlighted]:bg-emerald-400 hover:data-[is-highlighted]:bg-emerald-500"
      >
        Start now
      </Button>
    </div>
  )
}
