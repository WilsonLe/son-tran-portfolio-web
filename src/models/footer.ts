import { z } from 'zod';

const FooterColumn = z.object({ content: z.string() });
export const FooterData = z
  .object({
    columns: z.array(FooterColumn).default([]),
  })
  .default({
    columns: [
      { content: '' },
      {
        content: `
<h3>Son Tran</h3>
<a href="tran_s2@denison.edu"></a>
<p>Denison University</p>
`,
      },
    ],
  });

export type FooterData = z.infer<typeof FooterData>;
