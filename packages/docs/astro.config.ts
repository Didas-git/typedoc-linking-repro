import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { createStarlightTypeDocPlugin } from "starlight-typedoc";
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const [createCoreDocumentation, coreDocumentationSidebar] = createStarlightTypeDocPlugin();

export default defineConfig({
    integrations: [
        starlight({
            title: "Test",
            description: "Test",
            customCss: ["./src/styles/index.css"],
            lastUpdated: true,
            expressiveCode: {
                plugins: [pluginLineNumbers()],
                defaultProps: {
                    showLineNumbers: false
                }
            },
            plugins: [
                createCoreDocumentation({
                    entryPoints: ["../core/src/index.ts"],
                    output: "documentation",
                    tsconfig: "../core/tsconfig.json",
                    sidebar: {
                        label: "Documentation",
                        collapsed: true
                    },
                    typeDoc: {
                        // useCodeBlocks: true,
                        parametersFormat: "table",
                        enumMembersFormat: "table",
                        publicPath: "/documentation/"
                    }
                })
            ],
            head: [
                {
                    tag: "meta",
                    attrs: {
                        name: "theme-color",
                        content: "#ad9ee7"
                    }
                }
            ],
            sidebar: [
                coreDocumentationSidebar
            ]
        })
    ]
});
