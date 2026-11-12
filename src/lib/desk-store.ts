import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TargetStatus = "queued" | "sent" | "replied" | "meeting" | "declined" | "helping";

export type DeskTarget = {
  id: string;
  name: string;
  place: string;
  sector: string;
  ask: string;
  route: string;
  status: TargetStatus;
  note: string;
};

type DeskState = {
  candidate: string;
  ward: string;
  email: string;
  organisation: string;
  targets: DeskTarget[];
  setProfile: (patch: Partial<Pick<DeskState, "candidate" | "ward" | "email" | "organisation">>) => void;
  addTarget: (target: Omit<DeskTarget, "id" | "status" | "note"> & { note?: string }) => void;
  removeTarget: (id: string) => void;
  setStatus: (id: string, status: TargetStatus) => void;
  setNote: (id: string, note: string) => void;
};

export const useDesk = create<DeskState>()(
  persist(
    (set, get) => ({
      candidate: "",
      ward: "",
      email: "",
      organisation: "",
      targets: [],
      setProfile: (patch) => set(patch),
      addTarget: (target) => {
        const exists = get().targets.some((row) => row.name.toLowerCase() === target.name.toLowerCase());
        if (exists) return;
        set({
          targets: [
            {
              id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
              status: "queued",
              note: target.note ?? "",
              name: target.name,
              place: target.place,
              sector: target.sector,
              ask: target.ask,
              route: target.route,
            },
            ...get().targets,
          ],
        });
      },
      removeTarget: (id) => set({ targets: get().targets.filter((row) => row.id !== id) }),
      setStatus: (id, status) =>
        set({ targets: get().targets.map((row) => (row.id === id ? { ...row, status } : row)) }),
      setNote: (id, note) =>
        set({ targets: get().targets.map((row) => (row.id === id ? { ...row, note } : row)) }),
    }),
    { name: "notts-ledger-desk", skipHydration: true },
  ),
);

export const statusLabel: Record<TargetStatus, string> = {
  queued: "Not contacted",
  sent: "Letter sent",
  replied: "Replied",
  meeting: "Meeting",
  declined: "Declined",
  helping: "Helping, logged",
};
