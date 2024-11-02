import { createUploadThing } from 'uploadthing/next';

const f = createUploadThing();

//FileRouter for your app can contain multiple FileRoutes
export const ourFileRouter = {
    //Define as many FileRoutes as you like, each witha unique routeSlug
    imageUploader: f({ image: {maxFileSize: "1MB"} })
    //Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file}) => {
        console.log("file url", file.url, metadata);
    }),
};