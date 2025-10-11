import type { MetadataRoute } from 'next';
import android36 from '@assets/FAVICON/android-icon-36x36.png';
import android48 from '@assets/FAVICON/android-icon-48x48.png';
import android72 from '@assets/FAVICON/android-icon-72x72.png';
import android96 from '@assets/FAVICON/android-icon-96x96.png';
import android144 from '@assets/FAVICON/android-icon-144x144.png';
import android192 from '@assets/FAVICON/android-icon-192x192.png';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'App',
    short_name: 'App',
    icons: [
      { src: android36.src, sizes: '36x36', type: 'image/png' },
      { src: android48.src, sizes: '48x48', type: 'image/png' },
      { src: android72.src, sizes: '72x72', type: 'image/png' },
      { src: android96.src, sizes: '96x96', type: 'image/png' },
      { src: android144.src, sizes: '144x144', type: 'image/png' },
      { src: android192.src, sizes: '192x192', type: 'image/png' }
    ]
  };
}
