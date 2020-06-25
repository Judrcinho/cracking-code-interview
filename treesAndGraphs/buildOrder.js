function getBuildOrder(projects, dependencies) {
    let dependencyMap = new Map();

    for (dependency of dependencies) {
        if (dependencyMap.has(dependency[1])) {
            let dependencies = dependencyMap.get(dependency[1]);
            dependencies.push(dependency[0]);
            dependencyMap.set(dependency[1], dependencies);
        } else {
            dependencyMap.set(dependency[1], [dependency[0]]);
        }
    }

    let buildQueue = new Array();

    //add all independent projects 
    for (let project of projects) {
        if (!dependencyMap.has(project)) {
            buildQueue.push(project);

            for (let [key, value] of dependencyMap) {
                if (value.includes(project)) {
                    value.splice(value.indexOf(project), 1);
                    if (value.length != 0 )
                        dependencyMap.set(key, value);
                    else {
                        buildQueue.push(key);
                        dependencyMap.delete(key);
                    }
                }
            }
        }
    }

    console.log(buildQueue);
}

let projects = ['a', 'b', 'c', 'd', 'e', 'f'];
let dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];

let buildOrder = getBuildOrder(projects, dependencies);