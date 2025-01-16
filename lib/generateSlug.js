export function generateSlug(title) {
  const slug = title
    .toLowerCase() //Convert the title to lowercase
    .replace(/\s+/g, "-") //Replace spaces with dashes
    .replace(/[^\w\-]+/g, "") //Replace non-word characters except dashes
    .replace(/\-\-+/g, "-") //Replace multiple consecutive dashes with a single dash
    .replace(/^\-+/, "") //Replace dashes from the beginning
    .replace(/\-+$/, ""); //Replace dashes from the end

  return slug;
}
