const fs = require('fs');
let file = fs.readFileSync('src/pages/index.astro', 'utf8');

const targetStr = `      <!-- Product Studio Highlight Section (Now at the top, Full Width relative to main) -->`;
const startIndex = file.indexOf(targetStr);

if (startIndex === -1) {
    console.log("Could not find start index");
    process.exit(1);
}

// Find the end index. It's the end of the section
const sectionEndStr = `      </section>\n\n      <!-- Padded container for all other content -->`;
const endIndex = file.indexOf(sectionEndStr, startIndex);

if (endIndex === -1) {
    console.log("Could not find end index");
    process.exit(1);
}

const sectionContent = file.slice(startIndex, endIndex + `      </section>\n`.length);

// Remove the section
let newFile = file.slice(0, startIndex) + file.slice(endIndex + `      </section>\n`.length);

// Now we need to insert it below "Services"
const insertTarget = `        </section>\n\n        <!-- Projects Section -->`;
const insertIndex = newFile.indexOf(insertTarget);

if (insertIndex === -1) {
    console.log("Could not find insert index");
    process.exit(1);
}

// Insert before the insertTarget
newFile = newFile.slice(0, insertIndex + `        </section>\n\n`.length) + sectionContent + `\n` + newFile.slice(insertIndex + `        </section>\n\n`.length);

// Because it is now placed within a container that is already padded 
// <div class="px-4 md:px-[10em]">, we might need to change its inner padding 
// from `mx-auto px-4 md:px-[4em] lg:px-0` so it doesn't get squished,
// or break it out of the container? 
// The user just said "cambia de posicion la seccion que muestra el product studio, ponla abajo de servicios"
// Let's first move it literally.

fs.writeFileSync('src/pages/index.astro', newFile);
console.log("Moved successfully.");
