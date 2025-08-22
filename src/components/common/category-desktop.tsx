import Link from "next/link";

import { Button } from "@/components/ui/button";

import { categoryTable } from "../../db/schema";

interface CategoryDesktopProps {
  categories: (typeof categoryTable.$inferSelect)[];
}

const CategoryDesktop = ({ categories }: CategoryDesktopProps) => {
  return (
    <div className="flex w-full items-center justify-between">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="ghost"
          className="rounded-full bg-white text-xs font-semibold text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
          asChild
        >
          <Link href={`/category/${category.slug}`}>{category.name}</Link>
        </Button>
      ))}
    </div>
  );
};

export default CategoryDesktop;
