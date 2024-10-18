import { Image as ImageType } from "./../models/Image";
import Image from "next/image";

// One row of an ImageTable component
function ImageRow(props: ImageType) {
  return (
    <tr className="border-b">
      <td className="p-4">
        <Image src={`${props.url}?random=${props.seed}`} width={95} height={120} alt={props.title} />
      </td>
      <td className="p-4">
        {props.title}
      </td>
      <td className="p-4">
        {props.description}
      </td>
    </tr>
  );
}

// ImageTable serves as the body's root component in the DOM
export default function ImageTable() {
  async function allImages() {
    const res = await fetch("https://fakerapi.it/api/v1/images?_width=380");

    if (!res.ok) {
      throw new Error(`Request failed with status "${res.status}"`);
      // TODO: Display an error page instead?
    }

    const images = await res.json().then((_) => _);
    
    if (images.code != 200) {
      throw new Error("Faker API says something went wrong on their end");
      // TODO: Display an error page instead?
    }

    return images.data.map((image: ImageType, index: number) => {
      return <ImageRow key={index} seed={index} url={image.url} title={image.title} description={image.description} />;
    });
  }

  return (
    <div className="w-full p-6">
      <h3 className="text-lg font-bold p-4">My Image Library</h3>
      <div className="border rounded-lg overflow-hidden">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b">
                <th className="h-12 px-4 text-left font-semibold">
                  Image
                </th>
                <th className="h-12 px-4 text-left font-semibold">
                  Title
                </th>
                <th className="h-12 px-4 text-left font-semibold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {allImages()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
