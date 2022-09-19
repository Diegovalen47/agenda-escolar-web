import { createReactQueryHooks } from "@trpc/react";
import { AppRouter } from '../../../backend/src/index';

export const trpc = createReactQueryHooks<AppRouter>()