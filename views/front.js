// const mock = JSON.parse('[{"Id":"b077adf76821b9f7926e022107c0be17c193e9fcf688292ee1aa8fa377581f99","Names":["/webserver"],"Image":"nginx:mainline-alpine","ImageID":"sha256:bfba26ca350c153700592ebd7e4613f25a7a8779289e041eb68a97623277de82","Command":"nginx -g \'daemon off;\'","Created":1559916264,"Ports":[{"IP":"0.0.0.0","PrivatePort":80,"PublicPort":80,"Type":"tcp"}],"Labels":{"com.docker.compose.config-hash":"597a86c9bb2f2598fb6f6693b47d01986d0e35465bb63d5093b3c56669aea9fb","com.docker.compose.container-number":"1","com.docker.compose.oneoff":"False","com.docker.compose.project":"node_project","com.docker.compose.service":"webserver","com.docker.compose.version":"1.24.0","maintainer":"NGINX Docker Maintainers <docker-maint@nginx.com>"},"State":"running","Status":"Up 16 minutes","HostConfig":{"NetworkMode":"node_project_app-network"},"NetworkSettings":{"Networks":{"node_project_app-network":{"IPAMConfig":null,"Links":null,"Aliases":null,"NetworkID":"5b4b21f840d8401d746b82c6295532803420d63481efa6a6fdf425e84e6c9f34","EndpointID":"9ea35f2725f9e0fa5de8216b5477594df4f67ee00df774addadc8d210ada0b53","Gateway":"192.168.48.1","IPAddress":"192.168.48.3","IPPrefixLen":20,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"MacAddress":"02:42:c0:a8:30:03","DriverOpts":null}}},"Mounts":[{"Type":"bind","Source":"/home/ec2-user/node_project/nginx-conf","Destination":"/etc/nginx/conf.d","Mode":"rw","RW":true,"Propagation":"rprivate"},{"Type":"volume","Name":"node_project_web-root","Source":"/var/lib/docker/volumes/node_project_web-root/_data","Destination":"/var/www/html","Driver":"local","Mode":"rw","RW":true,"Propagation":""}]},{"Id":"5d917ec96e4c450cd1c743aae21bdcf5677648c9eb116cdd494c0e36dad06235","Names":["/nodejs"],"Image":"nodejs","ImageID":"sha256:7b9f296e22a6d1ecd0ba797268ad2c10dfde5973bddec8fdb636f16efc31984c","Command":"docker-entrypoint.sh npm start","Created":1559916263,"Ports":[{"PrivatePort":8080,"Type":"tcp"}],"Labels":{"com.docker.compose.config-hash":"18e14d33f7ce65dd3d4a2fac03787c7ca9fa906c0c0ca584e36583c8faeccfb7","com.docker.compose.container-number":"1","com.docker.compose.oneoff":"False","com.docker.compose.project":"node_project","com.docker.compose.service":"nodejs","com.docker.compose.version":"1.24.0"},"State":"running","Status":"Up 16 minutes","HostConfig":{"NetworkMode":"node_project_app-network"},"NetworkSettings":{"Networks":{"node_project_app-network":{"IPAMConfig":null,"Links":null,"Aliases":null,"NetworkID":"5b4b21f840d8401d746b82c6295532803420d63481efa6a6fdf425e84e6c9f34","EndpointID":"16c1b6906f8fad9d9aba2b0bda8e8e7818597d57c7242608c067a7bd8b933359","Gateway":"192.168.48.1","IPAddress":"192.168.48.2","IPPrefixLen":20,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"MacAddress":"02:42:c0:a8:30:02","DriverOpts":null}}},"Mounts":[{"Type":"bind","Source":"/var/run","Destination":"/var/run","Mode":"rw","RW":true,"Propagation":"rprivate"}]},{"Id":"71bbc4649334c00f7cd7d8568ddea3f44e6142e5f67d1dbc0850fdafb0925a7b","Names":["/stackdemo_web.1.r1not9i3wottfna04s8lgs9j6"],"Image":"127.0.0.1:5000/stackdemo:latest@sha256:1c83eaca13450ad2e3032533a6acc757a49e28fcae54b436636519340f1d2091","ImageID":"sha256:686178ec2857ef0c861073dd7e6b617d7bc6843e43544a5ad00fa3b0bf70b1cf","Command":"python app.py","Created":1559838650,"Ports":[],"Labels":{"com.docker.stack.namespace":"stackdemo","com.docker.swarm.node.id":"f391rrzxpw1737tckrwa6cjf0","com.docker.swarm.service.id":"l2ptrlf41qlg9kovwe0skagq4","com.docker.swarm.service.name":"stackdemo_web","com.docker.swarm.task":"","com.docker.swarm.task.id":"r1not9i3wottfna04s8lgs9j6","com.docker.swarm.task.name":"stackdemo_web.1.r1not9i3wottfna04s8lgs9j6"},"State":"running","Status":"Up 22 hours","HostConfig":{"NetworkMode":"default"},"NetworkSettings":{"Networks":{"ingress":{"IPAMConfig":{"IPv4Address":"10.255.0.12"},"Links":null,"Aliases":null,"NetworkID":"rjgrwag9vwfppqst6habq3zlq","EndpointID":"345d81a0266ea5d4c1c7d118f09a2fdb410cd33311e67d93f7b23bc7bfdb6e2c","Gateway":"","IPAddress":"10.255.0.12","IPPrefixLen":16,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"MacAddress":"02:42:0a:ff:00:0c","DriverOpts":null},"stackdemo_default":{"IPAMConfig":{"IPv4Address":"10.0.0.12"},"Links":null,"Aliases":null,"NetworkID":"j6f12a5enz7ro049me416tq77","EndpointID":"655ca5c0d1ed26c7dfd7a054798a49f12bb3bb835e058730e6367ea765eb68e8","Gateway":"","IPAddress":"10.0.0.12","IPPrefixLen":24,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"MacAddress":"02:42:0a:00:00:0c","DriverOpts":null}}},"Mounts":[]},{"Id":"7c9999aab612e9f8c8bf67c9d1076154853b61699fcfa2970095c827f3d40b04","Names":["/stackdemo_redis.1.faegluv82fnboewrpd4g1mtmi"],"Image":"redis:alpine@sha256:2c8839911829aac720d41690edc07c0aff8385294fccd3a892af46d1a83b1ac0","ImageID":"sha256:72e76053ebb73c258af5020c9ef27ba9302a6ee182f2c9c51b43c1689f1983c9","Command":"docker-entrypoint.sh redis-server","Created":1559838499,"Ports":[{"PrivatePort":6379,"Type":"tcp"}],"Labels":{"com.docker.stack.namespace":"stackdemo","com.docker.swarm.node.id":"f391rrzxpw1737tckrwa6cjf0","com.docker.swarm.service.id":"g47rukhw1bg0vbfd0xahxnu0m","com.docker.swarm.service.name":"stackdemo_redis","com.docker.swarm.task":"","com.docker.swarm.task.id":"faegluv82fnboewrpd4g1mtmi","com.docker.swarm.task.name":"stackdemo_redis.1.faegluv82fnboewrpd4g1mtmi"},"State":"running","Status":"Up 22 hours","HostConfig":{"NetworkMode":"default"},"NetworkSettings":{"Networks":{"stackdemo_default":{"IPAMConfig":{"IPv4Address":"10.0.0.7"},"Links":null,"Aliases":null,"NetworkID":"j6f12a5enz7ro049me416tq77","EndpointID":"0ba08bc4ffd289f633bf6e32f355a378ca44d34c9d58bfb62a6c0ea438cc0a81","Gateway":"","IPAddress":"10.0.0.7","IPPrefixLen":24,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"MacAddress":"02:42:0a:00:00:07","DriverOpts":null}}},"Mounts":[{"Type":"volume","Name":"378f1f770b45f44fa8e57b76c9f6f62d7028f7e509d30ff1fe4e372a610e81ab","Source":"","Destination":"/data","Driver":"local","Mode":"","RW":true,"Propagation":""}]},{"Id":"c749c211373c1963149d34550310558100678e283fdde1bba0d5ff82cf131e01","Names":["/registry.1.orcltiqj4zliczhmnjbhgslda"],"Image":"registry:2@sha256:77a8fb00c00b99568772a70f0863f6192ff2635e4af4e22e4d9c622edeb5f2de","ImageID":"sha256:f32a97de94e13d29835a19851acd6cbc7979d1d50f703725541e44bb89a1ce91","Command":"/entrypoint.sh /etc/docker/registry/config.yml","Created":1559838360,"Ports":[{"PrivatePort":5000,"Type":"tcp"}],"Labels":{"com.docker.swarm.node.id":"f391rrzxpw1737tckrwa6cjf0","com.docker.swarm.service.id":"pwj5nlebsi7kxrnw30jmf5gal","com.docker.swarm.service.name":"registry","com.docker.swarm.task":"","com.docker.swarm.task.id":"orcltiqj4zliczhmnjbhgslda","com.docker.swarm.task.name":"registry.1.orcltiqj4zliczhmnjbhgslda"},"State":"running","Status":"Up 22 hours","HostConfig":{"NetworkMode":"default"},"NetworkSettings":{"Networks":{"ingress":{"IPAMConfig":{"IPv4Address":"10.255.0.5"},"Links":null,"Aliases":null,"NetworkID":"rjgrwag9vwfppqst6habq3zlq","EndpointID":"a355644c0ea255d029892a931267bbd482a37661ba96980beb3d14b3086870a7","Gateway":"","IPAddress":"10.255.0.5","IPPrefixLen":16,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"MacAddress":"02:42:0a:ff:00:05","DriverOpts":null}}},"Mounts":[{"Type":"volume","Name":"195bee7728f00c3ba265fc5a729f34260726b5b4b0013553de96d88ec12c1395","Source":"","Destination":"/var/lib/registry","Driver":"local","Mode":"","RW":true,"Propagation":""}]}]');

function runApp() {
    const path = window.location.pathname;

    if(path === '/' || path === '') {
        fetchDockerContainers();
    } else if(path.includes('/container/')) {
        const containerId = window.location.pathname.split('/container/')[1];
        fetchDockerContainerLogs(containerId);
    }
}


function fetchDockerContainers() {
    fetch('/get-containers')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            renderDockerContainers(JSON.parse(data));
        })
        .catch(err => console.log(err));
}

function fetchDockerContainerLogs(containerId) {
    fetch(`/get-containers/${containerId}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            renderDockerContainerLogs(JSON.parse(data));
        })
        .catch(err => console.log(err));
}

function renderDockerContainers(data) {
    const wrapper = document.getElementById('wrapper');
    let html = '';

    for(container of data) {
        html+= `<div>
            <div>Id: ${container.Id}</div>
            <div>State: ${container.State}</div>
            <div>Status: ${container.Status}</div>
            <a href="/container/${container.Id}">Open log</a>
        </div></br></br>`;
    }

    wrapper.innerHTML = html;
}

function renderDockerContainerLogs(data) {
    console.log('data', data);
}

runApp();
