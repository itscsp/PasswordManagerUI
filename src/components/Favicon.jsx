
export default function DynamicFavicon({ website, ...props }) {
    const faviconUrl = `https://www.google.com/s2/favicons?sz=256&domain_url=${website}`;

    return <img {...props}  src={faviconUrl} />;
}