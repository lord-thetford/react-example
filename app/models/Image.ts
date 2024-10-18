export type Image = {
  // React key
  key: number;

  // Integer value to feed Lorem Picsum, just sharing the value of the key
  seed: number;

  // From Faker API
  title: string;
  description: string;
  url: string;
}
