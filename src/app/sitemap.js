import { tipeMobil } from "@/lib/dataMobil"

export default async function sitemap() {

  const carUrls = tipeMobil.map((car) => ({
    url: `https://cheryduniakarawaciofficial.com${car.path}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: 'https://cheryduniakarawaciofficial.com/',
      lastModified: new Date(),
    },
    {
      url: 'https://cheryduniakarawaciofficial.com/contact',
      lastModified: new Date(),
    },

    ...carUrls,
  ]
}