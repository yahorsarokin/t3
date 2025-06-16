const mockUrls = [
  "https://kl8rkzpepe.ufs.sh/f/iX5HtiTqnsErs5cdMnbCSAtFQLfO6irxb3IZcKpuVJdngmkT",
  "https://kl8rkzpepe.ufs.sh/f/iX5HtiTqnsErnicfUxgMoDFXdNpVfC1EP6mGSecLaIk0Asb5",
  "https://kl8rkzpepe.ufs.sh/f/iX5HtiTqnsErkO0ebDCseYr1o82BSyqjwEQWXU45TzuMKIF7",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
