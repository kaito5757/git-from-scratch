import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export function init(repoPath: string) {
 const gitDir = join(repoPath, '.git');

 if (existsSync(gitDir)) {
   console.log('Repository already initialized.');
   return;
 }

 mkdirSync(join(gitDir, 'objects'), { recursive: true });
 mkdirSync(join(gitDir, 'refs', 'heads'), { recursive: true });

 writeFileSync(join(gitDir, 'HEAD'), 'ref: refs/heads/main\n');
 console.log('Initialized empty Git repository in', gitDir);
}