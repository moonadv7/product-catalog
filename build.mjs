import fs from 'node:fs/promises';
import path from 'node:path';
import {unzipSync} from 'fflate';
const root=path.resolve('public');
await fs.mkdir(path.join(root,'assets'),{recursive:true});
await fs.copyFile('index.html',path.join(root,'index.html'));
for(const file of await fs.readdir('.')){
  if(/\.(js|css|svg)$/.test(file))await fs.copyFile(file,path.join(root,'assets',file));
  if(/^images-\d+\.zip$/.test(file)){
    const entries=unzipSync(await fs.readFile(file));
    for(const [name,bytes] of Object.entries(entries)){
      if(name.endsWith('/'))continue;
      const target=path.resolve(root,name);
      if(!target.startsWith(root+path.sep))throw new Error('Invalid asset path');
      await fs.mkdir(path.dirname(target),{recursive:true});
      await fs.writeFile(target,bytes);
    }
  }
}
console.log('Static catalog built in public/');
