/**
 * Welcome to ng2tree
 */
export interface IAllowDropFn {
    (element: any, to: {
        parent: ITreeNode;
        index: number;
    }): boolean;
}
export interface INodeHeightFn {
    (node: ITreeNode): number;
}
/**
* This is the interface of the options input of the tree.
* See docs for more detailed explanations
*/
export interface ITreeOptions {
    /**
     * Override children field. Default: 'children'
     */
    childrenField?: string;
    /**
     * Override display field. Default: 'name'
     */
    displayField?: string;
    /**
     * Override id field. Default: 'id'
     */
    idField?: string;
    /**
     * Override isExpanded field. Default: 'isExpanded'
     */
    isExpandedField?: string;
    /**
     * Override isHidden field. Default: 'isHidden'
     */
    isHiddenField?: string;
    /**
     * Supply function for getting fields asynchronously. Should return a Promise
     */
    getChildren?: (node: ITreeNode) => any;
    /**
     * Change the default mouse and key actions on the tree
     */
    actionMapping?: any;
    /**
     * Allow dragging tree nodes. Default: false
     */
    allowDrag?: boolean;
    /**
     * Allow drop on the tree.
     * Either boolean value, or a function that takes the dragged element and drop location (parent, index)
     * and returns a boolean value.
     * Will be called when dragging over the nodes or between nodes, and allow to prevent the drop style
     * Default: true
     */
    allowDrop?: boolean | IAllowDropFn;
    /**
    * Specify padding per node instead of children padding (to allow full row select for example)
    */
    levelPadding?: number;
    /**
     * Supply function for getting a custom class for the node component
     */
    nodeClass?: (node: ITreeNode) => string;
    /**
     * Boolean whether virtual scroll should be used.
     * Increases performance for large trees
     * Default is false
     */
    useVirtualScroll?: boolean;
    /**
     * Supply a function for getting each node's height - for virtual scrolling
     * The tree model will account for the extra pixels for the drop slots
     * Default is 22
     */
    nodeHeight?: number | INodeHeightFn;
    /**
     * Supply a function for getting the height of the dropslow that's located
     * between nodes. This is used for height calculations for virtual scrolling
     * Default is 2
     */
    dropSlotHeight?: number;
}
/**
 * This is the interface of a single Tree Node
 */
export interface ITreeNode {
    /**
     * Parent node
     */
    parent: ITreeNode;
    /**
     * The value of the node's field that is used for displaying its content.
     * By default 'name', unless stated otherwise in the options
     */
    displayField: string;
    /**
     * The children of the node.
     * By default is determined by 'node.data.children', unless stated otherwise in the options
     */
    children: ITreeNode[];
    /**
     * Pointer to the original data.
     */
    data: any;
    /**
     * Pointer to the ElementRef of the TreeNodeComponent that's displaying this node
     */
    elementRef: any;
    /**
     * Level in the tree (starts from 1).
     */
    level: number;
    /**
     * Path in the tree: Array of IDs.
     */
    path: string[];
    /**
     * index of the node inside its parent's children
     */
    index: number;
    /**
     * A unique key of this node among its siblings.
     * By default it's the 'id' of the original node, unless stated otherwise in options.idField
     */
    id: any;
    isExpanded: boolean;
    isActive: boolean;
    isFocused: boolean;
    isCollapsed: boolean;
    isLeaf: boolean;
    hasChildren: boolean;
    isRoot: boolean;
    /**
     * @param skipHidden whether to skip hidden nodes
     * @returns next sibling (or null)
     */
    findNextSibling(skipHidden: any): ITreeNode;
    /**
     * @param skipHidden whether to skip hidden nodes
     * @returns previous sibling (or null)
     */
    findPreviousSibling(skipHidden: any): ITreeNode;
    /**
     * @param skipHidden whether to skip hidden nodes
     * @returns first child (or null)
     */
    getFirstChild(skipHidden: any): ITreeNode;
    /**
     * @param skipHidden whether to skip hidden nodes
     * @returns last child (or null)
     */
    getLastChild(skipHidden: any): ITreeNode;
    /**
     * Finds the visually next node in the tree.
     * @param goInside whether to look for children or just siblings
     * @returns next node.
     */
    findNextNode(goInside: boolean): ITreeNode;
    /**
     * Finds the visually previous node in the tree.
     * @param skipHidden whether to skip hidden nodes
     * @returns previous node.
     */
    findPreviousNode(skipHidden: any): ITreeNode;
    /**
     * @returns      true if this node is a descendant of the parameter node
     */
    isDescendantOf(node: ITreeNode): boolean;
    /**
     * @returns      in case levelPadding option is supplied, returns the current node's padding
     */
    getNodePadding(): string;
    /**
     * @returns      in case nodeClass option is supplied, returns the current node's class
     */
    getClass(): string;
    /**
     * Expands / Collapses the node
     */
    toggleExpanded(): any;
    /**
     * Expands the node
     */
    expand(): any;
    /**
     * Collapses the node
     */
    collapse(): any;
    /**
     * Expands all ancestors of the node
     */
    ensureVisible(): any;
    /**
     * Activates / Deactivates the node (selects / deselects)
     */
    toggleActivated(multi: any): any;
    /**
     * Focus on the node
     */
    focus(): any;
    /**
     * Blur (unfocus) the node
     */
    blur(): any;
    /**
     * Hides the node
     */
    hide(): any;
    /**
     * Makes the node visible
     */
    show(): any;
    /**
     * @param value  if true makes the node hidden, otherwise visible
     */
    setIsHidden(value: boolean): any;
    /**
     * Scroll the screen to make the node visible
     */
    scrollIntoView(): any;
    /**
     * Fire an event to the renderer of the tree (if it was registered)
     */
    fireEvent(event: any): any;
    /**
     * Invokes a method for every node under this one - depth first
     * @param fn  a function that receives the node
     */
    doForAll(fn: (node: ITreeNode) => any): any;
    /**
     * expand all nodes under this one
     */
    expandAll(): any;
    /**
     * collapse all nodes under this one
     */
    collapseAll(): any;
}
/**
 * This is the interface of the TreeModel
 */
export interface ITreeModel {
    /**
     * All root nodes
     */
    roots: ITreeNode[];
    /**
     * Current focused node
     */
    focusedNode: ITreeNode;
    /**
     * Options that were passed to the tree component
     */
    options: ITreeOptions;
    /**
     * Is the tree currently focused
     */
    isFocused: boolean;
    /**
     * @returns Current active (selected) nodes
     */
    activeNodes: ITreeNode[];
    /**
     * @returns Current expanded nodes
     */
    expandedNodes: ITreeNode[];
    /**
     * @returns Current active (selected) node. If multiple nodes are active - returns the first one.
     */
    getActiveNode(): ITreeNode;
    /**
     * @returns Current focused node (either hovered or traversed with keys)
     */
    getFocusedNode(): ITreeNode;
    /**
     * Set focus on a node
     * @param value  true or false - whether to set focus or blur.
     */
    setFocusedNode(node: ITreeNode): any;
    /**
     * @param skipHidden  true or false - whether to skip hidden nodes
     * @returns      first root of the tree
     */
    getFirstRoot(skipHidden?: boolean): ITreeNode;
    /**
     * @param skipHidden  true or false - whether to skip hidden nodes
     * @returns      last root of the tree
     */
    getLastRoot(skipHidden?: boolean): ITreeNode;
    /**
     * @returns      true if the tree is empty
     */
    isEmptyTree(): boolean;
    /**
     * @returns All root nodes that pass the current filter
     */
    getVisibleRoots(): ITreeNode[];
    /**
     * @param     path  array of node IDs to be traversed respectively
     * @param     statrNode  optional. Which node to start traversing from
     * @returns   The node, if found - null otherwise
     */
    getNodeByPath(path: any[], startNode?: ITreeNode): ITreeNode;
    /**
     * @param     id  node ID to find
     * @returns   The node, if found - null otherwise
     */
    getNodeById(id: any): ITreeNode;
    /**
     * @param     predicate - either an object or a function, used as a test condition on all nodes.
     *            Could be every predicate that's supported by lodash-es-es `find` method
     * @param     statrNode  optional. Which node to start traversing from
     * @returns   First node that matches the predicate, if found - null otherwise
     */
    getNodeBy(predicate: any, startNode?: ITreeNode): ITreeNode;
    /**
     * Focuses or blurs the tree
     * @param value  true or false - whether to set focus or blur.
     */
    setFocus(value: boolean): any;
    /**
     * Focuses on the next node in the tree (same as down arrow)
     */
    focusNextNode(): any;
    /**
     * Focuses on the previous node in the tree (same as up arrow)
     */
    focusPreviousNode(): any;
    /**
     * Focuses on the inner child of the current focused node (same as right arrow on an expanded node)
     */
    focusDrillDown(): any;
    /**
     * Focuses on the parent of the current focused node (same as left arrow on a collapsed node)
     */
    focusDrillUp(): any;
    /**
     * Marks isHidden field in all nodes recursively according to the filter param.
     * If a node is marked visible, all of its ancestors will be marked visible as well.
     * @param filter  either a string or a function.
     *   In case it's a string, it will be searched case insensitively in the node's display attribute
     *   In case it's a function, it will be passed the node, and should return true if the node should be visible, false otherwise
     * @param autoShow  if true, make sure all nodes that passed the filter are visible
     */
    filterNodes(filter: any, autoShow?: boolean): any;
    /**
     * Marks all nodes isHidden = false
     */
    clearFilter(): any;
    /**
     * moves a node from one location in the tree to another
     * @param location  has a from and a to attributes, each has a node and index attributes.
       The combination of node + index tells which node needs to be moved, and to where
     */
    moveNode(node: ITreeNode, to: {
        node: ITreeNode;
        index: number;
    }): any;
    /**
     * Invokes a method for every node of the tree - depth first
     * @param fn  a function that receives the node
     */
    doForAll(fn: (node: ITreeNode) => any): any;
    /**
     * expand all nodes
     */
    expandAll(): any;
    /**
     * collapse all nodes
     */
    collapseAll(): any;
}
/**
 * This is the interface of the TreeNodeDrag service
 */
export interface ITreeNodeDrag {
    /**
     * Gets the current dragged node. Useful for overriding the drop action.
     * @param node  The parent node of the current dragged node
     * @param index  The index inside parent's children, of the current dragged node
     */
    getDragNode(): {
        node: ITreeNode;
        index: number;
    };
}
