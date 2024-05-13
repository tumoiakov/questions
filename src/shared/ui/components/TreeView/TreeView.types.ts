import { ReactNode } from "react"

export type TreeViewItem = {
	id: string;
	title: string;
	isDirectory: boolean;
	items?: TreeViewItem[]
}

export type TreeViewProps = {
	items: TreeViewItem[],
}

type TreeViewCommonItemProps = {
	itemId: string;
	title: string;
}

export type TreeViewDirectoryItemProps = TreeViewCommonItemProps & {
	isOpened?: boolean;
	items?: ReactNode[];
}

export type TreeViewDocumentItemProps = TreeViewCommonItemProps & {
	onClick: (itemId: string) => void;
};