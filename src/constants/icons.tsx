interface InterfaceIcons {
  url: string;
  description: string;
}

type TypeIcon = {
  [key: string]: InterfaceIcons
}

export const icons: TypeIcon = {
  'delete': {'url': 'assets/delete.png', 'description': 'Icon delete'},
  'edit': {'url': 'assets/edit.png', 'description': 'Icon edit'},
  'search': {'url': 'assets/search.png', 'description': 'Icon search'},
};
