import { getQueryHeader } from '@/lib/service';

export async function getStaticPaths() {
    const slugs = await getQueryHeader();

    const paths = slugs.map((slug) => ({
        params: { slug },
    }));

    console.log(paths);
    return {
        paths,
        fallback: false,
    };
}
