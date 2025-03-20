import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom',
        // setupFiles: './vitest.setup.ts'
        // globals: true,
        coverage: {
            provider: 'v8', // 'istanbul' (it is not installed) // or 'v8'
            reporter: ['text', 'json', 'html'],
            reportsDirectory: './tests/unit/coverage',
            exclude: [
                '**/node_modules/**',
                '**/dist/**',
                '**/custom-pattern/**',
                '**/build/**',
                '**/.{idea,git,cache,output,temp}/**',
                ...coverageConfigDefaults.exclude
            ]
        }
    }
});
